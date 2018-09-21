package com.autotownmayor.server.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.autotownmayor.server.persistence.entity.ContactMessageEntity;

public interface ContactMessageRepository extends MongoRepository<ContactMessageEntity,String>{

}
