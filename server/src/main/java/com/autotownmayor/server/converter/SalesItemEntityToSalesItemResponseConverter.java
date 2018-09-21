package com.autotownmayor.server.converter;

import java.util.function.Function;

import com.autotownmayor.server.persistence.entity.SalesItemEntity;
import com.autotownmayor.server.response.SalesItemResponse;

public class SalesItemEntityToSalesItemResponseConverter implements Function<SalesItemEntity,SalesItemResponse>{
	
	@Override
	public SalesItemResponse apply(SalesItemEntity source) {
		SalesItemResponse salesItemResponse = new SalesItemResponse();
		if(null != source.getId()) 
			salesItemResponse.setId(source.getId());
		salesItemResponse.setActiveStatus(source.getActiveStatus());
		salesItemResponse.setDescription(source.getDescription());
		salesItemResponse.setName(source.getName());
		salesItemResponse.setPrice(source.getPrice());
		salesItemResponse.setQuantity(source.getQuantity());
		salesItemResponse.setType(source.getType());
		salesItemResponse.setCategory(source.getCategory());
		salesItemResponse.setBrand(source.getBrand());
		salesItemResponse.setImageUrl(source.getImageUrl());


		//TODO:Add links later when we get images
		
		return salesItemResponse;
	}

}
