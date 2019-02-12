package com.autotownmayor.server.repository;

import com.autotownmayor.server.persistence.entity.ApplicationUserEntity;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ApplicationUserRepository extends MongoRepository<ApplicationUserEntity, String> {
    ApplicationUserEntity findByUsernameIgnoreCase(String username);
    ApplicationUserEntity findByEmailIgnoreCase(String email);
}
