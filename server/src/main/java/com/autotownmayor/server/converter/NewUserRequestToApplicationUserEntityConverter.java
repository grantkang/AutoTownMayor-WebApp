package com.autotownmayor.server.converter;

import com.autotownmayor.server.persistence.entity.ApplicationUserEntity;
import com.autotownmayor.server.persistence.enums.AuthorityName;
import com.autotownmayor.server.request.NewUserRequest;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.ArrayList;
import java.util.List;
import java.util.function.Function;

public class NewUserRequestToApplicationUserEntityConverter implements Function<NewUserRequest,ApplicationUserEntity> {


    @Override
    public ApplicationUserEntity apply(NewUserRequest source) {

        BCryptPasswordEncoder bcryptPasswordEncoder = new BCryptPasswordEncoder();
        ApplicationUserEntity user = new ApplicationUserEntity();
        user.setUsername(source.getUsername());
        user.setPassword(bcryptPasswordEncoder.encode(source.getUnhashedPassword()));
        user.setFirstName(source.getFirstName());
        user.setLastName(source.getLastName());
        user.setCompanyName(source.getCompanyName());
        user.setAddressLine1(source.getAddressLine1());
        user.setAddressLine2(source.getAddressLine2());
        user.setAddressCity(source.getAddressCity());
        user.setAddressState(source.getAddressState());
        user.setAddressZip(source.getAddressZip());
        user.setMainPhone(source.getMainPhone());
        user.setWorkPhone(source.getWorkPhone());
        user.setFaxNumber(source.getFaxNumber());
        user.setHasQuickBookAccount((source.hasQuickBooksAccount()));
        user.setEmail(source.getEmail());
        user.setAuthorities((source.getAuthorities() == null) ? getDefaultAuthorities() : source.getAuthorities());

        return user;
    }

    private List<String> getDefaultAuthorities() {
        List<String> res = new ArrayList<>();
        res.add(AuthorityName.ROLE_USER.getName());
        return res;
    }
}
