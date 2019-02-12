package com.autotownmayor.server.request;

import javax.validation.constraints.NotNull;

public class ContactRequest {
	@NotNull
	private String email;
	@NotNull
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
