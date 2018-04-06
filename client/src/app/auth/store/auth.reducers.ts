import * as AuthActions from './auth.actions';
import { JwtHelper } from 'angular2-jwt';

export interface State {
  token: string;
  authenticated: boolean;
}

const initialState: State = getInitialAuthState();

export function authReducer(state = initialState, action: AuthActions.AuthActions) {
  switch (action.type) {
    case AuthActions.SIGNIN:
      return {
        ...state,
        authenticated: true
      };
    case AuthActions.LOGOUT:
      return {
        ...state,
        token: null,
        authenticated: false
      };
    case AuthActions.SET_TOKEN:
      return {
        ...state,
        token: action.payload
      };
    default:
      return state;
  }
}

function getInitialAuthState(): State {
  const unauthorizedState: State = {
    token: null,
    authenticated: false
  };

  const token: string = localStorage.getItem('token');

  if (isTokenValid(token)) {
    return {
      token: token,
      authenticated: true
    };
  } else {
    return unauthorizedState;
  }
}

function isTokenValid(token: string): boolean {
  const jwtHelper: JwtHelper = new JwtHelper();
  return token != null && !jwtHelper.isTokenExpired(token);
}

function getTokenFromStorage(): string {
  const token = localStorage.getItem('token');
  if (isTokenValid(token)) {
    return token;
  } else {
    return null;
  }
}
