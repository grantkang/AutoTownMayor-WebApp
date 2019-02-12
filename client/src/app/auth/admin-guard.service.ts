import { Store } from '@ngrx/store';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { map, take } from 'rxjs/operators';

import * as fromApp from './../store/app.reducers';
import * as fromAuth from './../auth/store/auth.reducers';
import { AppConstant } from '../app.constant';
import { JwtHelperService } from '@auth0/angular-jwt';
import { MyJwt } from './model/my-jwt.model';

@Injectable()
export class AdminGuard implements CanActivate {

  constructor(private store: Store<fromApp.AppState>) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.store.select('auth').pipe(
      take(1),
      map((authState: fromAuth.State) => {
        const jwtHelper: JwtHelperService = new JwtHelperService;
        const jwtInfo: MyJwt = jwtHelper.decodeToken(authState.token);
        return jwtInfo.permissions.includes(AppConstant.ADMIN_ROLENAME);
      })
    );
  }
}
