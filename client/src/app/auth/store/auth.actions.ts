import { Action } from '@ngrx/store';

export const TRY_SIGNUP = 'TRY_SIGNUP';
export const TRY_SIGNIN = 'TRY_SIGNIN';
export const SIGNUP = 'SIGNUP';
export const SIGNIN = 'SIGNIN';
export const LOGOUT = 'LOGOUT';
export const SET_TOKEN = 'SET_TOKEN';
export const AUTH_FAILED = 'AUTH_FAILED';



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

export class SigninFailed implements Action {
  readonly type = AUTH_FAILED;
}

export type AuthActions = Signin | Logout | SetToken | TrySignin | SigninFailed;
