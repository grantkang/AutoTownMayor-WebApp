import { Store } from '@ngrx/store';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';
import { ActivatedRoute, Params, Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

import { PageableProductList } from './product-list-pageable.model';
import { SalesItem } from '../shared/model/salesitem.model';

import * as ProductActions from './store/product.actions';
import * as fromProduct from './store/product.reducers';
import * as fromApp from '../store/app.reducers';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: [
  ],
})
export class ProductListComponent implements OnInit {
  currentPage: number;
  displayedColumns = ['name', 'price', 'quantity'];
  productState: Observable<fromProduct.State>;

  constructor(private store: Store<fromProduct.FeatureState>,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.productState = this.store.select('products');
    this.route.queryParams.subscribe(
      (queryParams: Params) => {
        console.log('Page:' + queryParams['page']);
        this.store.dispatch(new ProductActions.FetchPageableProductList({
          page: +queryParams['page'],
          nameFilter: queryParams['nameFilter'],
          categoryFilter: queryParams['categoryFilter']
        }
        ));
      }
    );
  }

  onSelectElement(element) {
    this.router.navigate(['./item'], { relativeTo: this.route, queryParams: {id: element['id']}})
  }

  onNextPage(event) {
    this.router.navigate(['.'], { relativeTo: this.route, queryParams: {
      page: event['pageIndex'],
      nameFilter: this.route.snapshot.queryParams.nameFilter,
      categoryFilter: this.route.snapshot.queryParams.categoryFilter
    }});
  }


}
