import * as fromApp from '../../../store/app.reducers';
import * as ContactActions from './contact.actions';
import { ContactRequest } from 'app/core/contact/contact-request.model';

export interface FeatureState extends fromApp.AppState {
  contact: State
}

export interface State {
  contactMessage: ContactRequest // TODO: Change model name to ContactEntity or something more generic
}

const initialState = {
  contactMessage: {}
}

export function productReducer(state = initialState, action: ContactActions.ContactActions) {
  switch (action.type) {
      default:
        return state;
  }
}
