import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CompanyInfoComponent } from './company-info/company-info.component';
import { PromoComponent } from './promo/promo.component';
import { ContactComponent } from './core/contact/contact.component';
import { LoginComponent } from './auth/login/login.component';
import { CoreComponent } from './core/core.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';

// TODO: Not sure if contacts should have it's own route since it's implemented as a dialog box in footer
const routes: Routes = [
  {path: '', component: CoreComponent, children: [
    { path: '', redirectTo: '/products/categories', pathMatch: 'full' },
    { path: 'about', component: CompanyInfoComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'login', component: LoginComponent },
    { path: 'passwordreset', component: ResetPasswordComponent },
    { path: 'products', loadChildren: './products/products.module#ProductsModule' },
    { path: 'promo',  component: PromoComponent },
    { path: 'user', loadChildren: './user/user.module#UserModule' }
  ]},
  { path: 'admin', loadChildren: './admin/admin.module#AdminModule' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
