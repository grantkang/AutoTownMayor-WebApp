package com.autotownmayor.server.converter;

import com.autotownmayor.server.persistence.entity.ApplicationUserEntity;
import com.autotownmayor.server.request.NewUserRequest;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.function.Function;

public class NewUserRequestToApplicationUserEntityConverter implements Function<NewUserRequest,ApplicationUserEntity> {


    @Override
    public ApplicationUserEntity apply(NewUserRequest source) {
        BCryptPasswordEncoder bcryptPasswordEncoder = new BCryptPasswordEncoder();
        ApplicationUserEntity user = new ApplicationUserEntity();
        user.setUsername(source.getUsername());
        user.setPassword(bcryptPasswordEncoder.encode(source.getUnHashedPassword()));
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
        user.setHasQuickBookAccount(source.hasQuickBookAccount());
        return user;
    }
}
