package com.autotownmayor.server.rest;

import com.autotownmayor.server.service.RecaptchaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.autotownmayor.server.entity.ContactMessageEntity;
import com.autotownmayor.server.repository.ContactMessageRepository;
import com.autotownmayor.server.request.ContactRequest;

@CrossOrigin
@RestController
@RequestMapping(ResourceConstants.CONTACT_MESSAGE_V1)
public class ContactMessageResource {
	@Autowired
	ContactMessageRepository contactMessageRepository;

	@Autowired
	RecaptchaService recaptchaService;
	
	
	@RequestMapping(path="", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_UTF8_VALUE, consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public ResponseEntity<Void> createContactMessage(@RequestBody ContactRequest contactRequest) {
		System.out.println("ContactMessage POST called!");

		String result = recaptchaService.verifyRecaptcha(null, contactRequest.getGrecaptchaResponse());
		if(result.equals("")) {
			System.out.println("ContactMessage POST success!");
			contactMessageRepository.insert(new ContactMessageEntity(contactRequest.getEmail(),contactRequest.getMessage()));
			return new ResponseEntity<>(HttpStatus.CREATED);
		} else {
			System.out.println("ContactMessage POST failure!");
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
	}
}
