import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { SharedModule } from '../shared/shared.module';
import { promoReducer } from './store/promo.reducers';
import { PromoEffects } from './store/promo.effects';
import { PromoComponent } from './promo.component';
import { PromoCarouselComponent } from './promo-carousel/promo-carousel.component';
import { PromoGridItemComponent } from './promo-grid-list/promo-grid-item/promo-grid-item.component';
import { PromoGridListComponent } from './promo-grid-list/promo-grid-list.component';


@NgModule({
  declarations: [
    PromoComponent,
    PromoCarouselComponent,
    PromoGridListComponent,
    PromoGridItemComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    StoreModule.forFeature('promo', promoReducer),
    EffectsModule.forFeature([PromoEffects])
  ]
})
export class PromoModule {}
