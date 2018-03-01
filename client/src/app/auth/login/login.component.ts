import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import * as fromApp from '../../store/app.reducers';
import * as AuthActions from '../store/auth.actions';

// TODO: Consider creating a separate page for login
// TODO: Login form doesn't use proper styling
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    const usernameInput = '';
    const passwordInput = '';

    this.loginForm = new FormGroup({
      'username': new FormControl(usernameInput, Validators.required),
      'password': new FormControl(passwordInput, Validators.required)
    });
  }

  onSubmit() {
    const username = this.loginForm.get('username').value;
    const password = this.loginForm.get('password').value;
    this.store.dispatch(new AuthActions.TrySignin({username: username, password: password}));
  }
}
