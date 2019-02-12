package com.autotownmayor.server.bootstrap;

import com.autotownmayor.server.persistence.entity.ApplicationUserEntity;
import com.autotownmayor.server.persistence.entity.SalesItemEntity;
import com.autotownmayor.server.persistence.enums.AuthorityName;
import com.autotownmayor.server.repository.ApplicationUserRepository;
import com.autotownmayor.server.repository.ContactMessageRepository;
import com.autotownmayor.server.repository.SalesItemRepository;
import com.autotownmayor.server.tools.QbItemListToMongoImporter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.context.annotation.Profile;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.*;
import java.util.stream.Collectors;

@Component
@Profile("dev")
public class DevBootstrap implements ApplicationListener<ContextRefreshedEvent> {

    private ContactMessageRepository contactMessageRepository;
    private SalesItemRepository salesItemRepository;
    private ApplicationUserRepository applicationUserRepository;
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @Autowired
    DevBootstrap(ApplicationUserRepository applicationUserRepository,
                 ContactMessageRepository contactMessageRepository,
                 SalesItemRepository salesItemRepository,
                 BCryptPasswordEncoder bCryptPasswordEncoder) {
        this.applicationUserRepository = applicationUserRepository;
        this.contactMessageRepository = contactMessageRepository;
        this.salesItemRepository = salesItemRepository;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
    }

    @Override
    public void onApplicationEvent(ContextRefreshedEvent contextRefreshedEvent) {
        initData();
    }

    private void initData() {
        initItemList();
        initContactMessages();
        initUsers();
    }

    private void initItemList() {
        QbItemListToMongoImporter importer = new QbItemListToMongoImporter();
        List<SalesItemEntity> items = importer.importFromCsv("/ATM_ITEM_LIST.csv");
        items = items.stream().filter(item -> item.getActiveStatus().equals("Active")).filter(item -> !item.getCategory().equals("")).collect(Collectors.toList());
        salesItemRepository.deleteAll();
        salesItemRepository.saveAll(items);
    }

    private void initContactMessages() {
        contactMessageRepository.deleteAll();
    }

    private void initUsers() {
        applicationUserRepository.deleteAll();

        Set<AuthorityName> adminAuthorities = new HashSet<>();
        adminAuthorities.add(AuthorityName.ROLE_ADMIN);
        Set<AuthorityName> basicAuthorities = new HashSet<>();
        basicAuthorities.add(AuthorityName.ROLE_USER);

        List<ApplicationUserEntity> testUsers= new ArrayList<>();

        ApplicationUserEntity admin = new ApplicationUserEntity("admin", bCryptPasswordEncoder.encode("yeaR2018"), adminAuthorities);
        ApplicationUserEntity testUser01 = new ApplicationUserEntity("gkang", bCryptPasswordEncoder.encode("yeaR2009"), basicAuthorities);
        testUser01.setEmail("atmtester@yopmail.com");

        testUsers.add(testUser01);
        testUsers.add(admin);

        applicationUserRepository.saveAll(testUsers);
    }

}
