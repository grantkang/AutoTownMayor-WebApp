import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import { fromPromise } from 'rxjs/observable/fromPromise';

import * as AuthActions from './auth.actions';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AuthEffects {
  loginURL = 'http://localhost:8080/login'

    @Effect()
    authSignin = this.actions$
      .ofType(AuthActions.TRY_SIGNIN)
      .map((action: AuthActions.TrySignin) => {
        return action.payload;
      })
      .switchMap((authData: {username: string, password: string}) => {
        return(this.httpClient.post(this.loginURL, authData, {observe: 'response'}));
      })
      .map((response) => {
        return response.headers.get('Authorization').replace('Bearer ', '');
      })
      .mergeMap((token: string) => {
        localStorage.setItem('token', token);
        this.router.navigate(['/']);
        return [
          {
            type: AuthActions.SIGNIN
          },
          {
            type: AuthActions.SET_TOKEN,
            payload: token
          }
        ];
      });

    @Effect({dispatch: false})
    authLogout = this.actions$
        .ofType(AuthActions.LOGOUT)
        .do(() => {
          localStorage.clear();
          this.router.navigate(['/']);
        });

    constructor(private actions$: Actions, private router: Router, private httpClient: HttpClient) {}
}
