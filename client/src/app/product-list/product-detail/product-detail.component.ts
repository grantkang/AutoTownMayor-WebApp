import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';

import * as ProductActions from '../store/product.actions';
import * as fromProduct from '../store/product.reducers';
import { SalesItem } from '../../shared/model/salesitem.model';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: []
})
export class ProductDetailComponent implements OnInit {
  productState: Observable<fromProduct.State>;
  // TODO: Application tries to read the properties of pruductState.currentItem before the FetchProductById is called.

  constructor(private store: Store<fromProduct.FeatureState>,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.productState = this.store.select('products');
    this.route.queryParams.subscribe(
      (queryParams: Params) => {
        console.log('id: ' + queryParams['id']);
        this.store.dispatch(new ProductActions.FetchProductById(queryParams['id']));
      }
    );
  }
}
