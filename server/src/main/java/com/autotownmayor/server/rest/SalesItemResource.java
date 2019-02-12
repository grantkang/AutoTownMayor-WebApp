package com.autotownmayor.server.rest;

import java.io.*;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import com.autotownmayor.server.converter.SalesItemResponsePriceRemover;
import com.autotownmayor.server.persistence.enums.AuthorityName;
import com.autotownmayor.server.security.annotation.RestSecurity;
import com.autotownmayor.server.tools.QbItemListToMongoImporter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.autotownmayor.server.converter.SalesItemEntityToSalesItemResponseConverter;
import com.autotownmayor.server.persistence.entity.SalesItemEntity;
import com.autotownmayor.server.repository.PageableSalesItemRepository;
import com.autotownmayor.server.repository.SalesItemRepository;
import com.autotownmayor.server.response.SalesItemResponse;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping(ResourceConstants.SALES_ITEM_V1)
public class SalesItemResource {
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

    @RestSecurity(AuthorityName.ROLE_ADMIN)
    @RequestMapping(path = ResourceConstants.UPLOAD_ITEM_LIST, method=RequestMethod.POST)
    public ResponseEntity<Void> uploadItemList(@RequestParam("file") MultipartFile file) throws IOException {
        QbItemListToMongoImporter qbItemListToMongoImporter = new QbItemListToMongoImporter();
        File convFile = new File(file.getOriginalFilename());
        convFile.createNewFile();
        FileOutputStream fos = new FileOutputStream(convFile);
        fos.write(file.getBytes());
        fos.close();
        List<SalesItemEntity> items = qbItemListToMongoImporter.importFromCsv(convFile);
        items = items.stream().filter(item -> (item.getActiveStatus().equals("Active"))).collect(Collectors.toList());
        if(items != null && items.size() != 0) {
            salesItemRepository.deleteAll();
            salesItemRepository.saveAll(items);
            return new ResponseEntity<>(HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }
}
