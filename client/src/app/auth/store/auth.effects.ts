
import {of as observableOf,  from as fromPromise } from 'rxjs';

import {tap, map, switchMap, share, catchError, mergeMap} from 'rxjs/operators';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs';

import * as AuthActions from './auth.actions';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppConstant } from '../../app.constant';

@Injectable()
export class AuthEffects {

    @Effect()
    authSignin = this.actions$
      .ofType(AuthActions.TRY_SIGNIN).pipe(
      map((action: AuthActions.TrySignin) => {
        return action.payload;
      }),
      switchMap((authData: {username: string, password: string}) => {
        return(this.httpClient.post(AppConstant.BASE_URL + AppConstant.LOGIN_URL, authData, {observe: 'response'})).pipe(
        map((response) => {
          return response.headers.get('Authorization').replace('Bearer ', '');
        }),
        mergeMap((token: string) => {
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
        }),
        catchError(err => {
          return observableOf({ type: AuthActions.AUTH_FAILED });
        }), );
    }), share(), );

    @Effect({dispatch: false})
    authLogout = this.actions$
        .ofType(AuthActions.LOGOUT).pipe(
        tap(() => {
          localStorage.clear();
          this.router.navigate(['/']);
        }));

    constructor(private actions$: Actions, private router: Router, private httpClient: HttpClient) {}
}
