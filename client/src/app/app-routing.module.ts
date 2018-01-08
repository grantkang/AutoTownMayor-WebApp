import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CompanyInfoComponent } from './company-info/company-info.component';
import { PromoComponent } from './promo/promo.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-list/product-detail/product-detail.component';


// TODO: Create a Product routing module for lazy loading
const routes: Routes = [
  { path: '', redirectTo: '/promo', pathMatch: 'full' },
  { path: 'about', component: CompanyInfoComponent },
  { path: 'promo',  component: PromoComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'products/item', component: ProductDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
