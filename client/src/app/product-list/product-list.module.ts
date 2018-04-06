import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list.component';
import { productReducer } from './store/product.reducers';
import { ProductEffects } from './store/product.effects';
import { SharedModule } from '../shared/shared.module';
import { ProductListFilterComponent } from './product-list-filter/product-list-filter.component';

@NgModule({
  declarations: [
    ProductDetailComponent,
    ProductListComponent,
    ProductListFilterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    StoreModule.forFeature('products', productReducer),
    EffectsModule.forFeature([ProductEffects])
  ]
})
export class ProductsModule {}
