import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CompanyInfoComponent } from './company-info/company-info.component';
import { PromoComponent } from './promo/promo.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-list/product-detail/product-detail.component';
import { ContactComponent } from './core/contact/contact.component';
import { LoginComponent } from './auth/login/login.component';


// TODO: Create a Product routing module for lazy loading
// TODO: Not sure if contacts should have it's own route since it's implemented as a dialog box in footer
const routes: Routes = [
  { path: '', redirectTo: '/promo', pathMatch: 'full' },
  { path: 'about', component: CompanyInfoComponent },
  { path: 'promo',  component: PromoComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'products/item', component: ProductDetailComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
