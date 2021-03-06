package com.autotownmayor.server.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.autotownmayor.server.persistence.entity.SalesItemEntity;

public interface SalesItemRepository extends MongoRepository<SalesItemEntity,String> {
	public Optional<SalesItemEntity> findById(String id);
	public Optional<SalesItemEntity>findByName(String name);
}
