package com.autotownmayor.server.rest;

import com.autotownmayor.server.converter.ApplicationUserEntityToApplicationUserReponseConverter;
import com.autotownmayor.server.converter.NewUserRequestToApplicationUserEntityConverter;
import com.autotownmayor.server.persistence.entity.ApplicationUserEntity;
import com.autotownmayor.server.persistence.enums.AuthorityName;
import com.autotownmayor.server.repository.ApplicationUserRepository;
import com.autotownmayor.server.request.NewUserRequest;
import com.autotownmayor.server.request.PasswordChangeRequest;
import com.autotownmayor.server.request.PasswordResetRequest;
import com.autotownmayor.server.request.UsernameRetrievalRequest;
import com.autotownmayor.server.response.ApplicationUserResponse;
import com.autotownmayor.server.security.annotation.RestSecurity;
import com.autotownmayor.server.service.NotificationService;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.apache.commons.lang.RandomStringUtils;
import org.apache.commons.lang.math.RandomUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import static com.autotownmayor.server.security.SecurityConstants.*;

@CrossOrigin
@RestController
@RequestMapping(ResourceConstants.USERS_V1)
public class ApplicationUserResource {

    @Autowired
    ApplicationUserRepository applicationUserRepository;

    @Autowired
    BCryptPasswordEncoder bCryptPasswordEncoder;

    @Autowired
    NotificationService notificationService;

    // TODO: Implement a way to check if the user info is valid (ie. password is at least X long and at most Y long)
    @RequestMapping(path=ResourceConstants.SIGN_UP, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_UTF8_VALUE, consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
    @RestSecurity(AuthorityName.ROLE_ADMIN)
    public ResponseEntity<Void> createNewUser(@RequestBody NewUserRequest req) {
        applicationUserRepository.insert(new NewUserRequestToApplicationUserEntityConverter().apply(req));
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @RequestMapping(path=ResourceConstants.LIST_USERS, method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    @RestSecurity(AuthorityName.ROLE_ADMIN)
    public List<ApplicationUserResponse> getAllUsers() {
        List<ApplicationUserEntity> allUsers = applicationUserRepository.findAll();
        return allUsers.stream()
                .map(new ApplicationUserEntityToApplicationUserReponseConverter())
                .collect(Collectors.toList());
    }

    @RequestMapping(path=ResourceConstants.CHANGE_PASSWORD, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_UTF8_VALUE, consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public ResponseEntity<Void> changePassword(@RequestHeader(value = "Authorization") String token, @RequestBody PasswordChangeRequest req) {
        Claims claims = Jwts.parser()
                .setSigningKey(SECRET.getBytes())
                .parseClaimsJws(token.replace(TOKEN_PREFIX, ""))
                .getBody();
        if (claims != null) {
            String username = claims.get("username").toString();
            ApplicationUserEntity user = applicationUserRepository.findByUsernameIgnoreCase(username);
            String newPassword = req.getUnhashedPassword();
            user.setPassword(bCryptPasswordEncoder.encode(newPassword));
            applicationUserRepository.save(user);

            return new ResponseEntity<>(HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }


    @RequestMapping(path = ResourceConstants.RESET_PASSWORD, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_UTF8_VALUE, consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public ResponseEntity<Void> resetPassword(@RequestBody PasswordResetRequest req) {
        ApplicationUserEntity user = applicationUserRepository.findByUsernameIgnoreCase(req.getUsername());
        if (user != null && req.getEmail().equals(user.getEmail())) {
            String newPassword = RandomStringUtils.randomAlphanumeric(RandomUtils.nextInt(13) + 8);
            user.setPassword(bCryptPasswordEncoder.encode(newPassword));
            applicationUserRepository.save(user);
            notificationService.sendPasswordResetNotification(user, newPassword);
            return new ResponseEntity<>(HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // TODO: Create a JWT and send an email w/ a PasswordChange link with the JWT in the parameter. This and the resetPasswordEnd methods should replace the old way of resetting PW.
    @RequestMapping(path = ResourceConstants.RESET_PASSWORD_START, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_UTF8_VALUE, consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public ResponseEntity<Void> resetPasswordStart(@RequestBody PasswordResetRequest req) {
        ApplicationUserEntity user = applicationUserRepository.findByUsernameIgnoreCase(req.getUsername());
        if(req.getEmail().equals(user.getEmail())) {
            Map<String, Object> claims = new HashMap<>();
            claims.put("username",user.getUsername());

            String passwordResetToken = Jwts.builder()
                    .setClaims(claims)
                    .setExpiration(new Date(System.currentTimeMillis() + PASSWORD_RESET_EXPIRATION_TIME))
                    .signWith(SignatureAlgorithm.HS512, PASSWORD_RESET_SECRET.getBytes())
                    .compact();
            notificationService.sendPasswordResetStartNotification(user, passwordResetToken);

            return new ResponseEntity<>(HttpStatus.OK);
        }

        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @RequestMapping(path = ResourceConstants.RESET_PASSWORD_END, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_UTF8_VALUE, consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public ResponseEntity<Void> resetPasswordEnd(@RequestBody PasswordChangeRequest newPassword, @RequestParam(value="token") String token) {
        Claims claims = Jwts.parser()
                .setSigningKey(PASSWORD_RESET_SECRET.getBytes())
                .parseClaimsJws(token)
                .getBody();
        if(claims != null) {
            String username = claims.get("username").toString();
            ApplicationUserEntity user = applicationUserRepository.findByUsernameIgnoreCase(username);
            user.setPassword(newPassword.getUnhashedPassword());
            applicationUserRepository.save(user);
            notificationService.sendSuccessfulPasswordReset(user);
            return new ResponseEntity<>(HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }


    @RequestMapping(path = ResourceConstants.RECOVER_USERNAME, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_UTF8_VALUE, consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public ResponseEntity<Void> recoverUsername(@RequestBody UsernameRetrievalRequest req) {
        ApplicationUserEntity user = applicationUserRepository.findByEmailIgnoreCase(req.getEmail());
        if(user != null) {
            notificationService.sendUsernameRecoveryNotification(user);
            return new ResponseEntity<>(HttpStatus.OK);
        } else{
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

}
