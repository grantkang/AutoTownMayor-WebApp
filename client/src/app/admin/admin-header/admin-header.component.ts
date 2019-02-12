import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromAuth from '../../auth/store/auth.reducers';
import * as fromApp from '../../store/app.reducers';
import * as AuthAction from '../../auth/store/auth.actions';
import { AppConstant } from '../../app.constant';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {
  authState: Observable<fromAuth.State>;
  title = AppConstant.COMPANY_NAME;
  adminRoleName = AppConstant.ADMIN_ROLENAME;

  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit() {
    this.authState = this.store.select('auth');
  }

  onLogout() {
    this.store.dispatch(new AuthAction.Logout());
  }
}
