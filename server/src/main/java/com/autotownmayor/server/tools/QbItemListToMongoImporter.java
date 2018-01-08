package com.autotownmayor.server.tools;

import java.util.Collections;
import java.util.List;

import com.autotownmayor.server.entity.SalesItemEntity;
import com.autotownmayor.server.repository.SalesItemRepository;

//TODO: Remove special characters from official ItemList or find a way to ignore non UFT-8 characters
//TODO: Find a way to filter values during the deserialization process(Ex. Ignore values w/ percentatges in the price column)

public class QbItemListToMongoImporter {
	public void shit(SalesItemRepository repository, String fileName){
		CsvDataLoader cdl = new CsvDataLoader();
		List<SalesItemEntity> items = cdl.loadObjectList(SalesItemEntity.class, fileName);
		repository.saveAll(items);
		// fetch all items
		System.out.println("Items found with findByType('Inventory Part'):");
		System.out.println("-------------------------------");
		for (SalesItemEntity item : repository.findByType("Inventory Part")) {
			System.out.println(item);
		}
		System.out.println();
	}
}
