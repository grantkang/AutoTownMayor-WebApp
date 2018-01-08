package com.autotownmayor.server;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.autotownmayor.server.repository.SalesItemRepository;
import com.autotownmayor.server.tools.QbItemListToMongoImporter;

@SpringBootApplication
public class AutoTownMayorWebAppServerApplication implements CommandLineRunner{

	@Autowired
	private SalesItemRepository repository;
	
	public static void main(String[] args) {
		SpringApplication.run(AutoTownMayorWebAppServerApplication.class, args);
	}
	
	
	@Override
	public void run(String... args) throws Exception {
//		repository.deleteAll();
//		QbItemListToMongoImporter importer = new QbItemListToMongoImporter();
//		importer.importFromCsv(repository, "/testitemlist.csv");
	}
}
