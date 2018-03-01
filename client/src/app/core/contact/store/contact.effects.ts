import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';

import * as ContactActions from './contact.actions';

@Injectable()
export class ContactEffects {
  @Effect()
  sendContactMessage = this.actions$
    .ofType(ContactActions.SEND_CONTACT_MESSAGE)
    .switchMap((action: ContactActions.SendContactMessage) => {
      const res = action.payload;
      const body = JSON.stringify(res);
      const headers = new HttpHeaders().set('Content-Type', 'application/json');

      return this.http.post(this.baseURL + '/contact/v1', body, {
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


  baseURL = 'http://localhost:8080';  // TODO: Create a class w/ all the resource constants in the shared folder

  constructor(private actions$: Actions,
    private http: HttpClient) {}
}
