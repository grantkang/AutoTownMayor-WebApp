package com.autotownmayor.server.rest;

import java.util.Optional;

import com.autotownmayor.server.converter.SalesItemResponsePriceRemover;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.autotownmayor.server.converter.SalesItemEntityToSalesItemResponseConverter;
import com.autotownmayor.server.entity.SalesItemEntity;
import com.autotownmayor.server.repository.PageableSalesItemRepository;
import com.autotownmayor.server.repository.SalesItemRepository;
import com.autotownmayor.server.response.SalesItemResponse;

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

    // TODO: Should just use the same URL but know whether to give prices or not depending on headers
	@RequestMapping(path="withoutprices", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public Page<SalesItemResponse> getAllItemsWithoutPrices(Pageable pageable){
        Page<SalesItemEntity> salesItemEntityList = pageableSalesItemRepository.findByType("Inventory Part",pageable);

        return salesItemEntityList.map(new SalesItemEntityToSalesItemResponseConverter()).map(new SalesItemResponsePriceRemover());
    }
	
	@RequestMapping(path="item/{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public Optional<SalesItemResponse> getItemById(@PathVariable String id) {
		Optional<SalesItemEntity> item = salesItemRepository.findById(id);
		return item.map(new SalesItemEntityToSalesItemResponseConverter());
	}

    @RequestMapping(path="withoutprices/item/{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public Optional<SalesItemResponse> getItemWithoutPriceById(@PathVariable String id) {
        Optional<SalesItemEntity> item = salesItemRepository.findById(id);
        return item.map(new SalesItemEntityToSalesItemResponseConverter()).map(new SalesItemResponsePriceRemover());
    }

}
