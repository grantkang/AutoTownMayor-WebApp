import { Component, OnInit } from '@angular/core';
import * as fromApp from '../../store/app.reducers';
import * as AuthAction from '../../auth/store/auth.actions';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: []
})
export class HeaderComponent implements OnInit {
  authState: Observable<{authenticated: boolean}>;
  title = 'Auto Town Mayor';

  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit() {
    this.authState = this.store.select('auth');
  }

  onLogout() {
    this.store.dispatch(new AuthAction.Logout());
  }
}
