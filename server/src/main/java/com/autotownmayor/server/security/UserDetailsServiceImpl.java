package com.autotownmayor.server.security;


import com.autotownmayor.server.persistence.entity.ApplicationUserEntity;
import com.autotownmayor.server.repository.ApplicationUserRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;



@Service
public class UserDetailsServiceImpl implements UserDetailsService {
    private ApplicationUserRepository applicationUserRepository;

    public UserDetailsServiceImpl(ApplicationUserRepository applicationUserRepository) {
        this.applicationUserRepository = applicationUserRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        ApplicationUserEntity applicationUser = applicationUserRepository.findByUsernameIgnoreCase(username);
        if (applicationUser == null) {
            throw new UsernameNotFoundException(username);
        }
        return JwtUserFactory.create(applicationUser);
    }
}