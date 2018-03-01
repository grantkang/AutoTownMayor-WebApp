package com.autotownmayor.server.bootstrap;

import com.autotownmayor.server.entity.ApplicationUserEntity;
import com.autotownmayor.server.repository.ApplicationUserRepository;
import com.autotownmayor.server.repository.ContactMessageRepository;
import com.autotownmayor.server.repository.PageableSalesItemRepository;
import com.autotownmayor.server.repository.SalesItemRepository;
import com.autotownmayor.server.tools.QbItemListToMongoImporter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.context.annotation.Profile;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

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
        salesItemRepository.deleteAll();
        QbItemListToMongoImporter importer = new QbItemListToMongoImporter();
        importer.importFromCsv(salesItemRepository, "/testitemlist.csv");
    }

    private void initContactMessages() {
        contactMessageRepository.deleteAll();
    }

    private void initUsers() {
        applicationUserRepository.deleteAll();
        List<ApplicationUserEntity> testUsers= new ArrayList<>();
        //ApplicationUserEntity testUser00 = new ApplicationUserEntity("user", "password");
        ApplicationUserEntity testUser01 = new ApplicationUserEntity("user", bCryptPasswordEncoder.encode("password"));
        ApplicationUserEntity testUser02 = new ApplicationUserEntity("javier", bCryptPasswordEncoder.encode("test"));
        //testUsers.add(testUser00);
        testUsers.add(testUser01);
        testUsers.add(testUser02);

        applicationUserRepository.saveAll(testUsers);
    }



}
