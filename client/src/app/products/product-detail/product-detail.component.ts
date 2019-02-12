import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
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
  imagePathPrefix = 'assets/images/items/';
  imagePathSuffix = '.jpg'
  placeholderImagePathDefaultPrefix = 'unavailable/';
  placeholderImagePathDefaultSuffix = '_default_dev.jpg';
  // TODO: If both default/backup images are unavailable, replaceImages() gets called repeatedly. Include a backup image for misc./blank

  // TODO: Application tries to read the properties of pruductState.currentItem before the FetchProductById is called.
  // TODO: Have a placeholder image ready based on category for items that don't have product photos

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

  replaceImage() {
    this.store.dispatch(new ProductActions.ReplaceProductImage());
  }

}
