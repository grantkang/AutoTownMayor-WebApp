package com.autotownmayor.server.tools;

import java.io.File;
import java.util.Collections;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.ResourceLoader;

import com.fasterxml.jackson.databind.MappingIterator;
import com.fasterxml.jackson.dataformat.csv.CsvMapper;
import com.fasterxml.jackson.dataformat.csv.CsvSchema;

public class CsvDataLoader {
	public CsvDataLoader() {};

	/* TODO: Default exported QBooks will give an error due to
	 *       1) InvalidFormatException, some of the items are discounts/tax_rates so the price column has a %age instead of a big decimal (Ex: 0%)
	 *       2) CharConversionException, some symbols such as registered trademark are not part of UTF-8. (Ex:Stinger/Rotabroach ®)
	 *
	 *
	 */
	public <T> List<T> loadObjectList(Class<T> type, String fileName) {
	    try {
	        CsvSchema bootstrapSchema = CsvSchema.emptySchema().withHeader();
	        CsvMapper mapper = new CsvMapper();
	        File file = new ClassPathResource(fileName).getFile();
	        MappingIterator<T> readValues = 
	          mapper.readerWithSchemaFor(type).with(bootstrapSchema).readValues(file);
	        return readValues.readAll();
	    } catch (Exception e) {
	        System.out.println("Error occurred while loading object list from file " + fileName + e);
	        return Collections.emptyList();
	    }
	}

	public <T> List<T> loadObjectList(Class<T> type, File file) {
		try {
			CsvSchema bootstrapSchema = CsvSchema.emptySchema().withHeader();
			CsvMapper mapper = new CsvMapper();
			MappingIterator<T> readValues =
					mapper.readerWithSchemaFor(type).with(bootstrapSchema).readValues(file);
			return readValues.readAll();
		} catch (Exception e) {
			System.out.println("Error occurred while loading object list from file " + file.getName() + e);
			return Collections.emptyList();
		}
	}
}
