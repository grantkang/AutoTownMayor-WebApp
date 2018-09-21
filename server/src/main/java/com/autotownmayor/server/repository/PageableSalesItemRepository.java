package com.autotownmayor.server.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;

import com.autotownmayor.server.persistence.entity.SalesItemEntity;

import java.util.List;

public interface PageableSalesItemRepository extends PagingAndSortingRepository<SalesItemEntity, String> {
	Page<SalesItemEntity> findByType(String type, Pageable page);
	Page<SalesItemEntity> findByTypeAndCategoryInAndNameContainsIgnoreCase(String type, List<String> category, String name, Pageable page);
	Page<SalesItemEntity> findByTypeAndNameContainsIgnoreCase(String type, String name, Pageable page);
	Page<SalesItemEntity> findByTypeAndCategoryIn(String type, List<String> category, Pageable page);
}
