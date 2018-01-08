import { NgModule } from '@angular/core';
import { CompanyInfoComponent } from './company-info.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CompanyInfoComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CompanyInfoModule {}
