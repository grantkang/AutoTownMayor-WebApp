import { NgModule } from '@angular/core';
import { PromoComponent } from './promo.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    PromoComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class PromoModule {}
