package com.autotownmayor.server.rest;

import java.util.Arrays;
import java.util.Optional;

import com.autotownmayor.server.converter.SalesItemResponsePriceRemover;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

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
	public Page<SalesItemResponse> getAllItems(Pageable pageable, @RequestParam(value="nameFilter", required=false) String nameFilter, @RequestParam(value="categoryFilter", required=false) String[] categoryFilter){
        Page<SalesItemEntity> salesItemEntityList = salesItemEntityPageByQueryValues(ResourceConstants.DEFAULT_ITEM_TYPE, nameFilter, categoryFilter, pageable);

        return salesItemEntityList.map(new SalesItemEntityToSalesItemResponseConverter());
	}

    // TODO: Should just use the same URL but know whether to give prices or not depending on headers
	@RequestMapping(path=ResourceConstants.WITHOUT_PRICES_PATH, method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public Page<SalesItemResponse> getAllItemsWithoutPrices(Pageable pageable, @RequestParam(value="nameFilter", required=false) String nameFilter, @RequestParam(value="categoryFilter", required=false) String[] categoryFilter){
        Page<SalesItemEntity> salesItemEntityList = salesItemEntityPageByQueryValues(ResourceConstants.DEFAULT_ITEM_TYPE, nameFilter, categoryFilter, pageable);

        return salesItemEntityList.map(new SalesItemEntityToSalesItemResponseConverter()).map(new SalesItemResponsePriceRemover());
    }
	
	@RequestMapping(path=ResourceConstants.SINGLE_ITEM_PATH, method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public Optional<SalesItemResponse> getItemById(@PathVariable String id) {
		Optional<SalesItemEntity> item = salesItemRepository.findById(id);
		return item.map(new SalesItemEntityToSalesItemResponseConverter());
	}

    @RequestMapping(path=ResourceConstants.WITHOUT_PRICES_PATH+ResourceConstants.SINGLE_ITEM_PATH, method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public Optional<SalesItemResponse> getItemWithoutPriceById(@PathVariable String id) {
        Optional<SalesItemEntity> item = salesItemRepository.findById(id);
        return item.map(new SalesItemEntityToSalesItemResponseConverter()).map(new SalesItemResponsePriceRemover());
    }

    // TODO: Find a better way to handle null RequestParameters
    private Page<SalesItemEntity> salesItemEntityPageByQueryValues(String type, String nameFilter, String[] categoryFilter, Pageable pageable) {
        if(nameFilter != null && categoryFilter != null) {
            return pageableSalesItemRepository.findByTypeAndCategoryInAndNameContainsIgnoreCase(type, Arrays.asList(categoryFilter), nameFilter, pageable);
        }
        else if(nameFilter != null && categoryFilter == null) {
            return pageableSalesItemRepository.findByTypeAndNameContainsIgnoreCase(type, nameFilter, pageable);
        }
        else if(nameFilter == null && categoryFilter != null) {
            return pageableSalesItemRepository.findByTypeAndCategoryIn(type, Arrays.asList(categoryFilter), pageable);
        }
        else {
            return pageableSalesItemRepository.findByType(type,pageable);
        }
    }
}
