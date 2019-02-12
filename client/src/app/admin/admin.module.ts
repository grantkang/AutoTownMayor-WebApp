import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { UserListComponent } from './users/user-list/user-list.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { UserEffects } from './users/store/user.effects';
import { userReducer } from './users/store/user.reducers';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { PipeModule } from '../pipe/pipe.module';
import { ItemListUploadComponent } from './item-list-upload/item-list-upload.component';

@NgModule({
  declarations: [
    AdminComponent,
    UserListComponent,
    AddUserComponent,
    AdminDashboardComponent,
    AdminHeaderComponent,
    ItemListUploadComponent
  ],
  imports: [
    AdminRoutingModule,
    CommonModule,
    FormsModule,
    PipeModule.forRoot(),
    ReactiveFormsModule,
    SharedModule,
    StoreModule.forFeature('users', userReducer),
    EffectsModule.forFeature([UserEffects])
  ]
})
export class AdminModule {}
