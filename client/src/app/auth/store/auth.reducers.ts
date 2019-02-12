import * as AuthActions from './auth.actions';
import { JwtHelperService } from '@auth0/angular-jwt';
import { MyJwt } from '../model/my-jwt.model';

export interface State {
  token: string;
  authenticated: boolean;
  user: MyJwt;
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
        authenticated: false,
        user: null
      };
    case AuthActions.SET_TOKEN:
      return {
        ...state,
        token: action.payload
      };
    case AuthActions.AUTH_FAILED:
      return {
        ...state
      };
    case AuthActions.SET_USER:
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
}

function getInitialAuthState(): State {
  const unauthorizedState: State = {
    token: null,
    authenticated: false,
    user: null
  };

  const jwtHelper: JwtHelperService = new JwtHelperService();
  const token: string = localStorage.getItem('token');

  if (isTokenValid(token)) {
    return {
      token: token,
      authenticated: true,
      user: jwtHelper.decodeToken(token)
    };
  } else {
    return unauthorizedState;
  }
}

function isTokenValid(token: string): boolean {
  const jwtHelper: JwtHelperService = new JwtHelperService();
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
