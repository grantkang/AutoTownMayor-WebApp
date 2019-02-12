import { Component, OnInit, OnChanges } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

import { AppConstant } from './app.constant';
import * as fromApp from './store/app.reducers';
import * as fromAuth from './auth/store/auth.reducers';
import * as AuthAction from './auth/store/auth.actions';
import { Store } from '@ngrx/store';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges {
  title = AppConstant.COMPANY_NAME;
  background = 'app/assets/images/ATM-background.png'

  constructor(private store: Store<fromApp.AppState>) {};

  ngOnChanges() {
    console.log('onChanges() called');
    const token = localStorage.getItem('token');
    const jwtHelper: JwtHelperService = new JwtHelperService();
    if (jwtHelper.isTokenExpired(token)) {
      this.store.dispatch(new AuthAction.Logout());
    }
  }
}
