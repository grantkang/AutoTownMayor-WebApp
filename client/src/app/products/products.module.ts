import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { productReducer } from './store/product.reducers';
import { ProductEffects } from './store/product.effects';
import { SharedModule } from '../shared/shared.module';
import { ProductListFilterComponent } from './product-list/product-list-filter/product-list-filter.component';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ProductImageLoaderComponent } from './product-image-loader/product-image-loader.component';
import { ProductCategoryListComponent } from './product-category-list/product-category-list.component';
import { ProductCategoryListItemComponent } from './product-category-list/product-category-list-item/product-category-list-item.component';

@NgModule({
  declarations: [
    ProductDetailComponent,
    ProductImageLoaderComponent,
    ProductListComponent,
    ProductListFilterComponent,
    ProductsComponent,
    ProductCategoryListComponent,
    ProductCategoryListItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProductsRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    StoreModule.forFeature('products', productReducer),
    EffectsModule.forFeature([ProductEffects])
  ]
})
export class ProductsModule {}
