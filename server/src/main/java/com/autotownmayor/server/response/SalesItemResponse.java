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
	private String category;
	private String brand;
	private String imageUrl;
	
	
	public SalesItemResponse() {
		super();
	}

	public SalesItemResponse(String id, String type, String activeStatus, String name, String description,
			BigDecimal price, int quantity, String category, String brand, String imageUrl) {
		super();
		this.type = type;
		this.activeStatus = activeStatus;
		this.name = name;
		this.description = description;
		this.price = price;
		this.quantity = quantity;
		this.category = category;
		this.brand = brand;
		this.imageUrl = imageUrl;
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

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public String getBrand() {
		return brand;
	}

	public void setBrand(String brand) {
		this.brand = brand;
	}

	public String getImageUrl() {
		return imageUrl;
	}

	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}
}
