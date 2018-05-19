import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromApp from '../../store/app.reducers';
import * as AuthAction from '../../auth/store/auth.actions';
import { AppConstant } from '../../app.constant';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: []
})
export class HeaderComponent implements OnInit {
  authState: Observable<{authenticated: boolean}>;
  title = AppConstant.COMPANY_NAME;

  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit() {
    this.authState = this.store.select('auth');
  }

  onLogout() {
    this.store.dispatch(new AuthAction.Logout());
  }
}
