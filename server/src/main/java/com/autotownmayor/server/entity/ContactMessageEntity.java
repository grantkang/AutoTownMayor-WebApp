package com.autotownmayor.server.entity;

public class ContactMessageEntity {
	private String email;
	private String message;
	
	public ContactMessageEntity() {
		super();
	}

	public ContactMessageEntity(String email, String message) {
		super();
		this.email = email;
		this.message = message;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}
}
