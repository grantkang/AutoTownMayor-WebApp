import { Component, Inject, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MatSnackBar } from '@angular/material';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: []
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  baseURL = 'http://localhost:8080';  // TODO: Create a class w/ all the resource constants in the shared folder

  constructor(public dialogRef: MatDialogRef<ContactComponent>, public snackBar: MatSnackBar, public http: HttpClient) { }

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    const emailInput = '';
    const messageInput = '';
    const captchaInput = '';

    this.contactForm = new FormGroup({
      'email': new FormControl(emailInput, Validators.email),
      'message': new FormControl(messageInput, Validators.required),
      'captcha': new FormControl(captchaInput, Validators.required)
    });
  }

  onSubmit() {
    // TODO: Should add sub methods & move the post request code to Contact Store
    const res = new ContactRequest(this.contactForm.get('email').value,
      this.contactForm.get('message').value,
      this.contactForm.get('captcha').value);
    const body = JSON.stringify(res);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    this.http.post(this.baseURL + '/contact/v1', body, {
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
}

export class ContactRequest {
  constructor(public email: string, public message: string, public secretCode: string) {}
}
