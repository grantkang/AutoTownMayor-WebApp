import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromProduct from '../store/product.reducers';
import { AppConstant } from '../../app.constant';

@Component({
  selector: 'app-product-list-filter',
  templateUrl: './product-list-filter.component.html',
  styleUrls: []
})
export class ProductListFilterComponent implements OnInit {
  productState: Observable<fromProduct.State>;
  filterForm: FormGroup;
  itemCategories: string[] = AppConstant.ITEM_CATEGORIES;

  constructor(private store: Store<fromProduct.FeatureState>,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.productState = this.store.select('products');
    this.filterForm = new FormGroup({
      nameFilter: new FormControl(),
      categoryFilter: new FormControl()
    });
  }

  onSubmit() {
    this.router.navigate(['.'], { relativeTo: this.route, queryParams:
      {
        page: this.route.snapshot.params.page,
        nameFilter: this.filterForm.value.nameFilter,
        categoryFilter: this.filterForm.value.categoryFilter
      }
    });
  }

  onClear() {
    this.filterForm.reset();
  }

}
