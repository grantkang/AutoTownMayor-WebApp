import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs/Rx';

import * as fromApp from '../../store/app.reducers';
import * as AuthActions from '../store/auth.actions';
import * as fromAuth from '../store/auth.reducers';
import { AuthEffects } from '../store/auth.effects';
import { MatSnackBar } from '@angular/material';

// TODO: Consider creating a separate page for login
// TODO: Not sure if AUTH_FAILED should be an action since it doesn't change the state.
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm: FormGroup;
  formError: Subscription;
  hasError: boolean;

  constructor(private store: Store<fromApp.AppState>, private authEffects: AuthEffects, public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.initializeForm();
  }

  ngOnDestroy() {
    this.formError.unsubscribe();
  }

  initializeForm() {
    const usernameInput = '';
    const passwordInput = '';
    this.hasError = false;

    this.loginForm = new FormGroup({
      'username': new FormControl(usernameInput, Validators.required),
      'password': new FormControl(passwordInput, Validators.required)
    });
    this.formError = this.authEffects.authSignin
      .filter(action => action.type === AuthActions.AUTH_FAILED)
      .subscribe(() => {
        this.snackBar.open('Invalid username/password combination.', null, { duration: 3000 });
      });
  }

  onSubmit() {
    const username = this.loginForm.get('username').value;
    const password = this.loginForm.get('password').value;
    this.store.dispatch(new AuthActions.TrySignin({username: username, password: password}));
  }

}
