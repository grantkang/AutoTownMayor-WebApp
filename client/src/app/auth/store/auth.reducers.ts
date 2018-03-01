import * as AuthActions from './auth.actions';
import { JwtHelper } from 'angular2-jwt';

export interface State {
  token: string;
  authenticated: boolean;
}

const initialState: State = checkIfTokenValid();

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

// TODO: Add a check to see if the token is expired
function checkIfTokenValid(): State {
  const unauthorizedState: State = {
    token: null,
    authenticated: false
  };

  const token: string = localStorage.getItem('token');

  if (token == null) {
    return unauthorizedState;
  } else {
    return {
      token: token,
      authenticated: true
    };
  }
}

