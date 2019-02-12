import { Store } from '@ngrx/store';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router, ParamMap } from '@angular/router';

import { Observable } from 'rxjs';

import * as ProductActions from '../store/product.actions';
import * as fromProduct from '../store/product.reducers';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: [
    './product-list.component.css'
  ],
})
export class ProductListComponent implements OnInit {
  currentPage: number;
  displayedColumns = ['type', 'image', 'name', 'price', 'quantity'];
  productState: Observable<fromProduct.State>;

  constructor(private store: Store<fromProduct.FeatureState>,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.productState = this.store.select('products');
    this.route.queryParamMap.subscribe(
      (queryParams: ParamMap) => {
        this.store.dispatch(new ProductActions.FetchPageableProductList({
          page: +queryParams.get('page'),
          nameFilter: queryParams.get('nameFilter'),
          categoryFilter: queryParams.getAll('categoryFilter')
        }
        ));
      }
    );
  }

  // TODO: Change it so that it opens a dialog
  onSelectElement(element) {
    // this.router.navigate(['./item'], { relativeTo: this.route, queryParams: {id: element['id']}})
  }

  onNextPage(event) {
    this.router.navigate(['.'], { relativeTo: this.route, queryParams: {
      page: event['pageIndex'],
      nameFilter: this.route.snapshot.queryParams.nameFilter,
      categoryFilter: this.route.snapshot.queryParams.categoryFilter
    }});
  }

}
