import * as fromApp from '../../../store/app.reducers';
import * as UserActions from './user.actions';
import { User } from '../../../shared/model/user.model';

export interface FeatureState extends fromApp.AppState {
  users: State
}

export interface State {
  userList: User[]
}

const initialState: State = {
  userList: []
}

export function userReducer(state = initialState, action: UserActions.UserActions) {
  switch (action.type) {
    case UserActions.SET_USER_LIST:
      return {
        ...state,
        userList: action.payload
      };
    default:
      return state;
  }
}
