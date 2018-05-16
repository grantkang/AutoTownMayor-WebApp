import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';

import * as ContactActions from './contact.actions';
import { AppConstant } from '../../../app.constant';

@Injectable()
export class ContactEffects {
  @Effect()
  sendContactMessage = this.actions$
    .ofType(ContactActions.SEND_CONTACT_MESSAGE)
    .switchMap((action: ContactActions.SendContactMessage) => {
      const res = action.payload;
      const body = JSON.stringify(res);
      const headers = new HttpHeaders().set('Content-Type', 'application/json');

      return this.http.post(AppConstant.BASE_URL + AppConstant.CONTACT_URL, body, {
        headers: headers
      });
    }).map(
      (response) => {
        return 'success';
      },
      (error) => {
        return 'error';
      }
    )

  constructor(private actions$: Actions,
    private http: HttpClient) {}
}
