package com.autotownmayor.server.entity;

import java.math.BigDecimal;

import org.springframework.data.annotation.Id;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

@JsonIgnoreProperties(ignoreUnknown = true)
public class SalesItemEntity {
	@Id
	private String id;
	private String type;
	private String activeStatus;
	private String name;
	private String description;
	private BigDecimal price;
	private int quantity;
	
	//TODO: Maybe add List<ItemType> so we can let customers filter through items
	
	public SalesItemEntity() {}

	public SalesItemEntity(String activeStatus, String name, String description, BigDecimal price, int quantity) {
		this.activeStatus = activeStatus;
		this.name = name;
		this.description = description;
		this.price = price;
		this.quantity = quantity;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	@JsonProperty("Type")
	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	@JsonProperty("Active Status")
	public String getActiveStatus() {
		return activeStatus;
	}

	public void setActiveStatus(String activeStatus) {
		this.activeStatus = activeStatus;
	}

	@JsonProperty("Item")
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
	
	@JsonProperty("Description")
	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
	
	@JsonProperty("Price")
	public BigDecimal getPrice() {
		return price;
	}

	public void setPrice(BigDecimal price) {
		this.price = price;
	}

	@JsonProperty("Quantity On Hand")
	public int getQuantity() {
		return quantity;
	}
	
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	
	public String toString() {
		return String.format("SalesItem[id=%s,activeStatus=%s,name=%s,description=%s,price=%.2f,qty=%d]", id,activeStatus,name,description,price,quantity);
	}
	
}
