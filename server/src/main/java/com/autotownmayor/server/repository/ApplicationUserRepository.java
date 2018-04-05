package com.autotownmayor.server.repository;

import com.autotownmayor.server.entity.ApplicationUserEntity;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ApplicationUserRepository extends MongoRepository<ApplicationUserEntity, String> {
    ApplicationUserEntity findByUsername(String username);
}