import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from './user.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AuthGuard } from 'app/auth/auth-guard.service';
import { UserChangePasswordComponent } from './user-change-password/user-change-password.component';

const userRoutes: Routes = [
  { path: '', component: UserComponent, canActivate: [AuthGuard], children: [
    { path: '', component: UserDashboardComponent },
    { path: 'changepassword', component: UserChangePasswordComponent }
  ]}
];

@NgModule({
  imports: [
    RouterModule.forChild(userRoutes)
  ],
  exports: [RouterModule],
  providers: [
    AuthGuard
  ]
})
export class UserRoutingModule {}
