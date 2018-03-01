import { Action } from '@ngrx/store';

import { ContactRequest } from 'app/core/contact/contact-request.model';

export const SEND_CONTACT_MESSAGE = 'SEND_CONTACT_MESSAGE';

export class SendContactMessage implements Action {
  readonly type = SEND_CONTACT_MESSAGE;

  constructor(public payload: ContactRequest) {}
}

export type ContactActions = SendContactMessage;

