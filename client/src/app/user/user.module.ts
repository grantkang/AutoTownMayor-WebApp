import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { UserComponent } from './user.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserRoutingModule } from './user-routing.module';
import { UserChangePasswordComponent } from './user-change-password/user-change-password.component';

@NgModule({
  declarations: [
    UserComponent,
    UserDashboardComponent,
    UserChangePasswordComponent
  ],
  imports: [
    UserRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule]
})
export class UserModule {}
