
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material';
import { Actions, Effect } from '@ngrx/effects';

import * as ProductActions from './product.actions';
import * as fromProduct from './product.reducers';
import { PageableProductList } from '../product-list-pageable.model';
import { SalesItem } from '../../shared/model/salesitem.model';
import { AppConstant } from '../../app.constant';

import 'rxjs/add/operator/switchMap';

@Injectable()
export class ProductEffects {


  @Effect()
  pageableProductListFetch = this.actions$
    .ofType(ProductActions.FETCH_PAGEABLE_PRODUCT_LIST)
    .switchMap((action: ProductActions.FetchPageableProductList) => {
      const pageNumber = action.payload.toString();
      const requestURL = AppConstant.BASE_URL + AppConstant.ITEMS_URL;
      const param = new HttpParams().set('page', pageNumber);
      return this.httpClient.get<PageableProductList>(requestURL, {params: param});
    })
    .map(
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
      return this.httpClient.get<SalesItem>(AppConstant.BASE_URL + AppConstant.ITEM_URL + action.payload);
    }).map(
      (response) => {
        return {
          type: ProductActions.SET_PRODUCT,
          payload: response
        }
      }
    );

  constructor(private actions$: Actions,
    private httpClient: HttpClient) {}
}
