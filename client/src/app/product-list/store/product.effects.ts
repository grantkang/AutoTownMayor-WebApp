
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material';
import { Actions, Effect } from '@ngrx/effects';

import * as ProductActions from './product.actions';
import * as fromProduct from './product.reducers';
import { PageableProductList } from '../product-list-pageable.model';
import { SalesItem } from '../../shared/model/salesitem.model';

import 'rxjs/add/operator/switchMap';

@Injectable()
export class ProductEffects {


  @Effect()
  pageableProductListFetch = this.actions$
    .ofType(ProductActions.FETCH_PAGEABLE_PRODUCT_LIST)
    .switchMap((action: ProductActions.FetchPageableProductList) => {
      return this.httpClient.get<PageableProductList>(this.baseURL + this.itemsURL + action.payload);
    }).map(
      (response) => {
        const salesItems: MatTableDataSource<SalesItem[]> = new MatTableDataSource(response['content']);
        const totalPages: number = response['totalPages'];
        const totalElements: number = response['totalElements'];
        const first: boolean = response['first'];
        const last: boolean = response['last'];
        const size: number = response['size'];
        const number: number = response['number'];
        const result = new PageableProductList(salesItems,
          totalPages,
          totalElements,
          first,
          last,
          size,
          number);
        return {
          type: ProductActions.SET_PAGEABLE_PRODUCT_LIST,
          payload: result
        }
      }
    );

  @Effect()
  productFetchById = this.actions$
    .ofType(ProductActions.FETCH_PRODUCT_BY_ID)
    .switchMap((action: ProductActions.FetchPageableProductList) => {
      return this.httpClient.get<SalesItem>(this.baseURL + this.itemURL + action.payload);
    }).map(
      (response) => {
        return {
          type: ProductActions.SET_PRODUCT,
          payload: response
        }
      }
    );


  baseURL = 'http://localhost:8080'; // TODO: During production stages change this to the proper backend URL.
  itemsURL = '/items/v1/?page=';
  itemURL = '/items/v1/item/'
  constructor(private actions$: Actions,
    private httpClient: HttpClient) {}
}
