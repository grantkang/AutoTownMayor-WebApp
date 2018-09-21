package com.autotownmayor.server.tools;

import java.io.File;
import java.util.List;

import com.autotownmayor.server.persistence.entity.SalesItemEntity;
import com.autotownmayor.server.repository.SalesItemRepository;

//TODO: Remove special characters from official ItemList or find a way to ignore non UFT-8 characters
//TODO: Find a way to filter values during the deserialization process(Ex. Ignore values w/ percentatges in the price column)

public class QbItemListToMongoImporter {
	public List<SalesItemEntity> importFromCsv(String fileName){
		CsvDataLoader cdl = new CsvDataLoader();
		List<SalesItemEntity> items = cdl.loadObjectList(SalesItemEntity.class, fileName);
		return items;
	}

	public List<SalesItemEntity> importFromCsv(File file){
		CsvDataLoader cdl = new CsvDataLoader();
		return cdl.loadObjectList(SalesItemEntity.class, file);
	}
}
