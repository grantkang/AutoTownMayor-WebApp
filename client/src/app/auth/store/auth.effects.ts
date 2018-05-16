import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import { fromPromise } from 'rxjs/observable/fromPromise';
import { Observable } from 'rxjs/Rx';

import * as AuthActions from './auth.actions';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppConstant } from '../../app.constant';

@Injectable()
export class AuthEffects {

    @Effect()
    authSignin = this.actions$
      .ofType(AuthActions.TRY_SIGNIN)
      .map((action: AuthActions.TrySignin) => {
        return action.payload;
      })
      .switchMap((authData: {username: string, password: string}) => {
        return(this.httpClient.post(AppConstant.BASE_URL + AppConstant.LOGIN_URL, authData, {observe: 'response'}))
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
        })
        .catch(err => {
          return Observable.of({ type: AuthActions.AUTH_FAILED });
        });
    }).share();

    @Effect({dispatch: false})
    authLogout = this.actions$
        .ofType(AuthActions.LOGOUT)
        .do(() => {
          localStorage.clear();
          this.router.navigate(['/']);
        });

    constructor(private actions$: Actions, private router: Router, private httpClient: HttpClient) {}
}
