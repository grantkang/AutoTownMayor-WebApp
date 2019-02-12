
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as UserActions from '../store/user.actions';
import * as fromUser from '../store/user.reducers';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  displayedColumns = ['username', 'companyName'];
  userState: Observable<fromUser.State>;

  constructor(private store: Store<fromUser.FeatureState>,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.userState = this.store.select('users');
    this.store.dispatch(new UserActions.FetchUserList());
  }

}
