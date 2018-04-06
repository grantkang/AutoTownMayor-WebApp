import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';

import * as PromoActions from '../store/promo.actions';
import * as fromPromo from '../store/promo.reducers';

@Component({
  selector: 'app-promo-grid-list',
  templateUrl: './promo-grid-list.component.html',
  styleUrls: []
})
export class PromoGridListComponent implements OnInit {
  promoState: Observable<fromPromo.State>;

  constructor(private store: Store<fromPromo.FeatureState>) {}

  ngOnInit() {
    this.promoState = this.store.select('promo');
  }
}
