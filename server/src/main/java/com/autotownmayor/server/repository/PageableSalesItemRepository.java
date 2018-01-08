package com.autotownmayor.server.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;

import com.autotownmayor.server.entity.SalesItemEntity;

public interface PageableSalesItemRepository extends PagingAndSortingRepository<SalesItemEntity, String> {
	Page<SalesItemEntity> findByName(String name, Pageable page);
	Page<SalesItemEntity> findByType(String type, Pageable page);
}
