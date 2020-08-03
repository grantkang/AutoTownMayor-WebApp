
import {of as observableOf,  from as fromPromise } from 'rxjs';

import {tap, map, switchMap, share, catchError, mergeMap} from 'rxjs/operators';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';

import * as AuthActions from './auth.actions';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppConstant } from '../../app.constant';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from '../../shared/model/user.model';
import { MyJwt } from '../model/my-jwt.model';

@Injectable()
export class AuthEffects {

    @Effect()
    authSignin = this.actions$.pipe(
      ofType(AuthActions.TRY_SIGNIN),
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
          const jwtHelper: JwtHelperService = new JwtHelperService();
          const jwtInfo: MyJwt = jwtHelper.decodeToken(token);
          if (jwtInfo.permissions.includes(AppConstant.ADMIN_ROLENAME)) {
            this.router.navigate(['/products/categories']);
          } else {
            this.router.navigate(['/products/categories']);
          }
          return [
            {
              type: AuthActions.SIGNIN
            },
            {
              type: AuthActions.SET_TOKEN,
              payload: token
            },
            {
              type: AuthActions.SET_USER,
              payload: jwtInfo
            }
          ];
        }),
        catchError(err => {
          return observableOf({ type: AuthActions.AUTH_FAILED });
        }), );
    }), share(), );

    @Effect({dispatch: false})
    authLogout = this.actions$.pipe(
        ofType(AuthActions.LOGOUT),
        tap(() => {
          localStorage.clear();
          this.router.navigate(['/']);
        }));

    @Effect({dispatch: false})
    authResetPassword = this.actions$.pipe(
        ofType(AuthActions.RESET_PASSWORD),
          map((action: AuthActions.ResetPassword) => {
            return action.payload;
          }),
          switchMap((resetPasswordInfo: { username: string, email: string}) => {
            const body = JSON.stringify(resetPasswordInfo);
            const headers = new HttpHeaders().set('Content-Type', 'application/json');
            const url = AppConstant.BASE_URL + AppConstant.USER_PASSWORD_RESET_URL;
            return this.httpClient.post(url, body, {
              headers: headers
            });
          }),
          map(
            (response) => {
              this.router.navigate(['/']);
            },
            (error) => {
              console.log(error);
            })
        );

    @Effect({dispatch: false})
    authChangePassword = this.actions$.pipe(
            ofType(AuthActions.CHANGE_PASSWORD),
              map((action: AuthActions.ChangePassword) => {
                return action.payload;
              }),
              switchMap((passwordInfo: {password: string}) => {
                const body = JSON.stringify(passwordInfo);
                const headers = new HttpHeaders().set('Content-Type', 'application/json');
                const url = AppConstant.BASE_URL + AppConstant.USER_PASSWORD_CHANGE_URL;
                return this.httpClient.post(url, body, {
                  headers: headers
                });
              }),
              map(
                (response) => {
                  console.log('Password change success!');
                },
                (error) => {
                  console.log('Password change failure!');
                }
              )
            )

    constructor(private actions$: Actions, private router: Router, private httpClient: HttpClient) {}
}
