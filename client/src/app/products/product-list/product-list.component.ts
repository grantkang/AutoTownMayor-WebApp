import { Store } from '@ngrx/store';
import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { ActivatedRoute, Params, Router, ParamMap } from '@angular/router';

import { Observable } from 'rxjs';

import * as ProductActions from '../store/product.actions';
import * as fromProduct from '../store/product.reducers';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: [
    './product-list.component.css'
  ],
})
export class ProductListComponent implements OnInit {
  currentPage: number;
  displayedColumns;
  productState: Observable<fromProduct.State>;

  constructor(private store: Store<fromProduct.FeatureState>,
              private route: ActivatedRoute,
              private router: Router,
              private breakpointObserver: BreakpointObserver) { }

  @HostListener('window:resize', ['$event'])
  onresize(event) {
    this.updateDisplayedColumns();
  }

  ngOnInit() {
    this.updateDisplayedColumns();
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

  updateDisplayedColumns() {
    this.displayedColumns =
      (this.breakpointObserver.isMatched('(min-width: 1337px')) ? ['type', 'image', 'name', 'price', 'quantity'] : ['image', 'name', 'price', 'quantity'];
  }

}
