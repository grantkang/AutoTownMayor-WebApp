import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductsComponent } from './products.component';
import { ProductCategoryListComponent } from './product-category-list/product-category-list.component';


const productsRoutes: Routes = [
  { path: '', component: ProductsComponent, children: [
    { path: '', redirectTo: 'categories', pathMatch: 'full' },
    { path: 'list', component: ProductListComponent },
    { path: 'item', component: ProductDetailComponent },
    { path: 'categories', component: ProductCategoryListComponent}
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
