import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';

import * as fromApp from '../../store/app.reducers';
import * as AuthActions from '../store/auth.actions';
import * as fromAuth from '../store/auth.reducers';
import { AuthEffects } from '../store/auth.effects';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  passwordResetForm: FormGroup;

  constructor(private store: Store<fromApp.AppState>, private authEffects: AuthEffects) { }

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    const usernameInput = '';
    const emailInput = '';

    this.passwordResetForm = new FormGroup({
      'username': new FormControl(usernameInput, Validators.required),
      'email': new FormControl(emailInput, [Validators.required, Validators.email])
    });
  }

  onSubmit() {
    const username = this.passwordResetForm.get('username').value;
    const email = this.passwordResetForm.get('email').value;
    this.store.dispatch(new AuthActions.ResetPassword({username: username, email: email}));
  }
}
