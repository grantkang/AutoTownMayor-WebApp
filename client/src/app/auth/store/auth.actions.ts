import { Action } from '@ngrx/store';
import { MyJwt } from '../model/my-jwt.model';

export const TRY_SIGNUP = 'TRY_SIGNUP';
export const TRY_SIGNIN = 'TRY_SIGNIN';
export const SIGNUP = 'SIGNUP';
export const SIGNIN = 'SIGNIN';
export const LOGOUT = 'LOGOUT';
export const SET_TOKEN = 'SET_TOKEN';
export const SET_USER = 'SET_USER';
export const AUTH_FAILED = 'AUTH_FAILED';
export const RESET_PASSWORD = 'RESET_PASSWORD';
export const CHANGE_PASSWORD = 'CHANGE_PASSWORD';



export class TrySignin implements Action {
    readonly type = TRY_SIGNIN;
    constructor (public payload: {username: string, password: string}) {}
}

export class Signin implements Action {
    readonly type = SIGNIN;
}

export class Logout implements Action {
    readonly type = LOGOUT;
}

export class SetToken implements Action {
    readonly type = SET_TOKEN;

    constructor(public payload: string) {}
}

export class SetUser implements Action {
    readonly type = SET_USER;

    constructor(public payload: MyJwt) {}
}

export class SigninFailed implements Action {
  readonly type = AUTH_FAILED;
}

export class ResetPassword implements Action {
  readonly type = RESET_PASSWORD;
  constructor (public payload: {username: string, email: string}) {}
}

export class ChangePassword implements Action {
  readonly type = CHANGE_PASSWORD;
  constructor (public payload: {password: string}) {}
}

export type AuthActions = Signin | Logout | SetToken | TrySignin | SigninFailed | ResetPassword | ChangePassword | SetUser;
