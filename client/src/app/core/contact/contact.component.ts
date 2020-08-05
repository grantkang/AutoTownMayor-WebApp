import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppConstant } from '../../app.constant';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: [ './contact.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  captchaResponse = '';

  constructor(public dialogRef: MatDialogRef<ContactComponent>, public snackBar: MatSnackBar, public http: HttpClient) { }

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    const emailInput = '';
    const messageInput = '';

    this.contactForm = new FormGroup({
      'email': new FormControl(emailInput, Validators.email),
      'message': new FormControl(messageInput, Validators.required),
      'recaptchaReactive': new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    // TODO: Should add sub methods & move the post request code to Contact Store
    const res = new ContactRequest(this.contactForm.get('email').value,
      this.contactForm.get('message').value,
      this.captchaResponse);
    const body = JSON.stringify(res);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    this.http.post(AppConstant.BASE_URL + AppConstant.CONTACT_URL, body, {
      headers: headers
    }).subscribe(
      (response) => {
        this.snackBar.open('Your message has been sent. Thank you for the feedback!', '', { duration: 3000 });
        this.dialogRef.close({
        });
      },
      (error) => {
        this.snackBar.open('Oops something went wrong', null, { duration: 3000 });
      }
    );
  }

  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
    this.captchaResponse = captchaResponse;
  }
}

export class ContactRequest {
  constructor(public email: string, public message: string, public grecaptchaResponse: string) {}
}
