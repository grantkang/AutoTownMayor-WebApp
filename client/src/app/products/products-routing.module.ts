import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductsComponent } from './products.component';


const productsRoutes: Routes = [
  { path: '', component: ProductsComponent, children: [
    { path: '', component: ProductListComponent },
    { path: 'item', component: ProductDetailComponent }
  ]}
];

@NgModule({
  imports: [
    RouterModule.forChild(productsRoutes)
  ],
  exports: [RouterModule],
  providers: [
  ]
})
export class ProductsRoutingModule {}
