package com.autotownmayor.server.converter;

import com.autotownmayor.server.persistence.entity.ApplicationUserEntity;
import com.autotownmayor.server.response.ApplicationUserResponse;

import java.util.function.Function;

public class ApplicationUserEntityToApplicationUserReponseConverter implements Function<ApplicationUserEntity,ApplicationUserResponse> {
    @Override
    public ApplicationUserResponse apply(ApplicationUserEntity source) {
        ApplicationUserResponse res = new ApplicationUserResponse();
        res.setUsername(source.getUsername());
        res.setFirstName(source.getFirstName());
        res.setLastName(source.getLastName());
        res.setCompanyName(source.getCompanyName());
        res.setEmail(source.getEmail());
        res.setResaleNumber(source.getResaleNumber());
        res.setAddressLine1(source.getAddressLine1());
        res.setAddressLine2(source.getAddressLine2());
        res.setAddressCity(source.getAddressCity());
        res.setAddressState(source.getAddressState());
        res.setAddressZip(source.getAddressZip());
        res.setMainPhone(source.getMainPhone());
        res.setWorkPhone(source.getWorkPhone());
        res.setFaxNumber(source.getFaxNumber());
        res.setAuthorities(source.getAuthorities());
        res.setHasQuickBookAccount(source.hasQuickBookAccount());

        return res;
    }
}
