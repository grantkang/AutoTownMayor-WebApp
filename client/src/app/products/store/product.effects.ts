
import {map, switchMap} from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material';
import { Actions, Effect } from '@ngrx/effects';

import * as ProductActions from './product.actions';
import * as fromProduct from './product.reducers';
import { PageableProductList } from '../product-list/product-list-pageable.model';
import { SalesItem } from '../../shared/model/salesitem.model';
import { AppConstant } from '../../app.constant';



@Injectable()
export class ProductEffects {


  @Effect()
  pageableProductListFetch = this.actions$
    .ofType(ProductActions.FETCH_PAGEABLE_PRODUCT_LIST).pipe(
    switchMap((action: ProductActions.FetchPageableProductList) => {
      const pageNumber = action.payload.page.toString();
      const nameFilter = action.payload.nameFilter;
      const categoryFilter = action.payload.categoryFilter;
      const requestURL = AppConstant.BASE_URL + AppConstant.ITEMS_URL;
      let params = new HttpParams().set('page', pageNumber);
      if (action.payload.nameFilter != null) {
        params = params.append('nameFilter', nameFilter);
      }
      if (action.payload.categoryFilter != null) {
        action.payload.categoryFilter.forEach(category => {
          params = params.append('categoryFilter', category)
        });
      }

      return this.httpClient.get<PageableProductList>(requestURL, {params: params});
    }),
    map(
      (response) => {
        const salesItems: MatTableDataSource<SalesItem[]> = new MatTableDataSource(response['content']);
        const totalPages: number = response['totalPages'];
        const totalElements: number = response['totalElements'];
        const first: boolean = response['first'];
        const last: boolean = response['last'];
        const size: number = response['size'];
        const number: number = response['number'];
        const result = new PageableProductList(
          salesItems,
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
      })
    );

  @Effect()
  productFetchById = this.actions$
    .ofType(ProductActions.FETCH_PRODUCT_BY_ID).pipe(
    switchMap((action: ProductActions.FetchPageableProductList) => {
      return this.httpClient.get<SalesItem>(AppConstant.BASE_URL + AppConstant.ITEM_URL + action.payload);
    }),
    map(
      (response) => {
        return {
          type: ProductActions.SET_PRODUCT,
          payload: response
        }
      }
    ));

  constructor(private actions$: Actions,
    private httpClient: HttpClient) {}
}
