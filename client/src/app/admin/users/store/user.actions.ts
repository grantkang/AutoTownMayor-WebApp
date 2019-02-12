import { Action } from '@ngrx/store';
import { User } from '../../../shared/model/user.model';

export const FETCH_USER_LIST = 'FETCH_USER_LIST';
export const SET_USER_LIST = 'SET_USER_LIST';
export const ADD_USER = 'ADD_USER';

export class FetchUserList implements Action {
  readonly type = FETCH_USER_LIST;

  constructor() {}
}

export class SetUserList implements Action {
  readonly type = SET_USER_LIST;

  constructor(public payload: User[]) {}
}

export class AddUser implements Action {
  readonly type = ADD_USER;

  constructor(public payload: User) {}
}

export type UserActions = FetchUserList | SetUserList | AddUser;
