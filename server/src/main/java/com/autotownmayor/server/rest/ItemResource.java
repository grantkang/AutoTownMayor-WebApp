package com.autotownmayor.server.rest;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.autotownmayor.server.converter.SalesItemEntityToSalesItemResponseConverter;
import com.autotownmayor.server.entity.SalesItemEntity;
import com.autotownmayor.server.repository.PageableSalesItemRepository;
import com.autotownmayor.server.repository.SalesItemRepository;
import com.autotownmayor.server.response.SalesItemResponse;

@CrossOrigin
@RestController
@RequestMapping(ResourceConstants.SALES_ITEM_V1)
public class ItemResource {
	@Autowired
	PageableSalesItemRepository pageableSalesItemRepository;
	
	@Autowired
	SalesItemRepository salesItemRepository;
	
	// TODO: Don't use hardcoded type String
	@RequestMapping(path="", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public Page<SalesItemResponse> getAllItems(Pageable pageable){
		Page<SalesItemEntity> salesItemEntityList = pageableSalesItemRepository.findByType("Inventory Part",pageable);
		
		return salesItemEntityList.map(new SalesItemEntityToSalesItemResponseConverter());
	}
	
	@RequestMapping(path="item/{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public Optional<SalesItemResponse> getItemById(@PathVariable String id) {
		Optional<SalesItemEntity> item = salesItemRepository.findById(id);
		return item.map(new SalesItemEntityToSalesItemResponseConverter());
	}
}
