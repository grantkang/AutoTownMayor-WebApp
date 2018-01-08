package com.autotownmayor.server.response;

import java.math.BigDecimal;

public class SalesItemResponse {

	private String id;
	private String type;
	private String activeStatus;
	private String name;
	private String description;
	private BigDecimal price;
	private int quantity;
	
	
	public SalesItemResponse() {
		super();
	}

	public SalesItemResponse(String id, String type, String activeStatus, String name, String description,
			BigDecimal price, int quantity) {
		super();
		this.type = type;
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

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getActiveStatus() {
		return activeStatus;
	}

	public void setActiveStatus(String activeStatus) {
		this.activeStatus = activeStatus;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public BigDecimal getPrice() {
		return price;
	}

	public void setPrice(BigDecimal price) {
		this.price = price;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	
	
}
