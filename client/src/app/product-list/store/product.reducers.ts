import { MatTableDataSource } from '@angular/material';

import { SalesItem } from '../../shared/model/salesitem.model';
import { PageableProductList } from '../product-list-pageable.model';
import * as fromApp from '../../store/app.reducers';
import * as ProductActions from './product.actions';

export interface FeatureState extends fromApp.AppState {
  products: State
}

export interface State {
  pageableProductList: PageableProductList,
  currentProduct: SalesItem
}

const initialState = {
  pageableProductList: {},
  currentProduct: {}
}

export function productReducer(state = initialState, action: ProductActions.ProductActions) {
  switch (action.type) {
      case ProductActions.SET_PAGEABLE_PRODUCT_LIST:
        return {
          ...state,
          pageableProductList: action.payload
        };
      case ProductActions.SET_PRODUCT:
        return {
          ...state,
          currentProduct: action.payload
        };
      default:
        return state;
  }
}
