package com.autotownmayor.server.security;

import com.autotownmayor.server.persistence.entity.ApplicationUserEntity;
import com.autotownmayor.server.persistence.enums.AuthorityName;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

// Guessing it's bad to create something like JwtUser(ApplicationUser) constructor
public class JwtUserFactory {
    private JwtUserFactory() {
    }

    public static JwtUser create(ApplicationUserEntity user) {
        return new JwtUser(
                user.getUsername(),
                user.getPassword(),
                mapToGrantedAuthorities(user.getAuthorities())
        );
    }
    //
    private static List<GrantedAuthority> mapToGrantedAuthorities(List<String> authorities) {
        return authorities.stream()
                .map(authority -> new SimpleGrantedAuthority(authority))
                .collect(Collectors.toList());
    }
}
