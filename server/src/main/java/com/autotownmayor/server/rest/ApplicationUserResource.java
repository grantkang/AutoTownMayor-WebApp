package com.autotownmayor.server.rest;

import com.autotownmayor.server.converter.ApplicationUserEntityToApplicationUserReponseConverter;
import com.autotownmayor.server.converter.NewUserRequestToApplicationUserEntityConverter;
import com.autotownmayor.server.persistence.entity.ApplicationUserEntity;
import com.autotownmayor.server.persistence.enums.AuthorityName;
import com.autotownmayor.server.repository.ApplicationUserRepository;
import com.autotownmayor.server.request.NewUserRequest;
import com.autotownmayor.server.response.ApplicationUserResponse;
import com.autotownmayor.server.security.annotation.RestSecurity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@CrossOrigin
@RestController
@RequestMapping(ResourceConstants.USERS_V1)
public class ApplicationUserResource {

    @Autowired
    ApplicationUserRepository applicationUserRepository;

    @RequestMapping(path=ResourceConstants.SIGN_UP, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    @RestSecurity(AuthorityName.ROLE_ADMIN)
    public void createNewUser(@RequestBody NewUserRequest req) {
        applicationUserRepository.insert(new NewUserRequestToApplicationUserEntityConverter().apply(req));
    }

    @RequestMapping(path=ResourceConstants.LIST_USERS, method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    @RestSecurity(AuthorityName.ROLE_ADMIN)
    public List<ApplicationUserResponse> getAllUsers() {
        List<ApplicationUserEntity> allUsers = applicationUserRepository.findAll();
        return allUsers.stream()
                .map(new ApplicationUserEntityToApplicationUserReponseConverter())
                .collect(Collectors.toList());
    }
}
