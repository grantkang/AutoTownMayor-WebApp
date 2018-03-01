import { ActionReducerMap } from '@ngrx/store';
import * as fromProduct from '../product-list/store/product.reducers';
import * as fromAuth from '../auth/store/auth.reducers';

export interface AppState {
  auth: fromAuth.State
}

export const reducers: ActionReducerMap<AppState> = {
  auth: fromAuth.authReducer
}
