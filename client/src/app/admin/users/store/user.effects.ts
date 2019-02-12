
import {map, switchMap} from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import * as UserActions from './user.actions';
import { AppConstant } from '../../../app.constant';
import { User } from '../../../shared/model/user.model';
import { Router } from '@angular/router';
import { NewUserRequest } from '../../../shared/model/new-user-request.model';


@Injectable()
export class UserEffects {
  @Effect()
  userListFetch = this.actions$
  .ofType(UserActions.FETCH_USER_LIST).pipe(
    switchMap(
      (action: UserActions.FetchUserList) => {
      const requestURL = AppConstant.BASE_URL + AppConstant.USER_LIST_URL;
      return this.httpClient.get<User[]>(requestURL);
    }),
    map(
      (users) => {
        return {
          type: UserActions.SET_USER_LIST,
          payload: users
        };
      }
  ));

  @Effect({dispatch: false})
  userAdd = this.actions$
  .ofType(UserActions.ADD_USER).pipe(
    map(
      (action: UserActions.AddUser) => {
        const requestURL = AppConstant.BASE_URL + AppConstant.USER_SIGNUP_URL;
        const user: NewUserRequest = action.payload;
        const body = JSON.stringify(user);
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        this.httpClient.post(requestURL, body, {
          headers: headers
        }).subscribe(
          (response) => {
            // TODO: Redirect on success
            this.router.navigate(['/admin']);
          },
          (error) => {
            console.log(error);
          }
        );
      }
    )
  );

  constructor(private actions$: Actions,
    private httpClient: HttpClient,
    private router: Router) {}
}
