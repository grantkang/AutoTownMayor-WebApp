package com.autotownmayor.server.request;

public class ContactRequest {
	private String email;
	private String message;
	private String grecaptchaResponse;
	
	public ContactRequest() {
		super();
	}

	public ContactRequest(String email, String message, String captcha) {
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

	public String getGrecaptchaResponse() {
		return grecaptchaResponse;
	}

	public void setGrecaptchaResponse(String secretCode) {
		this.grecaptchaResponse = secretCode;
	}
		
}
