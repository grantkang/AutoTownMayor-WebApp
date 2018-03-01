import { Action } from '@ngrx/store';

import { PageableProductList } from '../product-list-pageable.model';
import { SalesItem } from '../../shared/model/salesitem.model';

export const FETCH_PAGEABLE_PRODUCT_LIST = 'FETCH_PAGEABLE_PRODUCT_LIST';
export const SET_PAGEABLE_PRODUCT_LIST = 'SET_PAGEABLE_PRODUCT_LIST';
export const FETCH_PRODUCT_BY_ID = 'FETCH_PRODUCT_BY_ID';
export const SET_PRODUCT = 'SET_PRODUCT';

export class FetchPageableProductList implements Action {
  readonly type = FETCH_PAGEABLE_PRODUCT_LIST;

  constructor(public payload: number) {}
}

export class SetPageableProductList implements Action {
  readonly type = SET_PAGEABLE_PRODUCT_LIST;

  constructor(public payload: PageableProductList) {}
}

export class FetchProductById implements Action {
  readonly type = FETCH_PRODUCT_BY_ID;

  constructor(public payload: string) {}
}

export class SetProduct implements Action {
  readonly type = SET_PRODUCT;

  constructor(public payload: SalesItem) {}
}

export type ProductActions = FetchPageableProductList | SetPageableProductList | FetchPageableProductList | SetProduct;
