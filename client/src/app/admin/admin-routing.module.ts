import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminGuard } from '../auth/admin-guard.service';
import { ItemListUploadComponent } from './item-list-upload/item-list-upload.component';

const adminRoutes: Routes = [
  { path: '', component: AdminComponent, canActivate: [AdminGuard], children: [
    { path: '', component: AdminDashboardComponent },
    { path: 'userlist', component: UserListComponent },
    { path: 'newuser', component: AddUserComponent },
    { path: 'quickbooks-upload', component: ItemListUploadComponent }
  ]}
];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [RouterModule],
  providers: [
    AdminGuard
  ]
})
export class AdminRoutingModule {}
