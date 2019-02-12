import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppConstant } from '../../app.constant';
import { JwtHelperService } from '@auth0/angular-jwt';

import * as fromApp from '../../store/app.reducers';
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private store: Store<fromApp.AppState>) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const jwtHelper: JwtHelperService = new JwtHelperService();
    const myToken = localStorage.getItem('token');
    const originalURL = req.url;
    let editedRequest;

    if (myToken == null || jwtHelper.isTokenExpired(myToken)) {
      const newURL = this.convertToUnprotectedURL(originalURL);
      editedRequest = req.clone({url: newURL});
    } else {
      editedRequest = this.appendAuthorizationHeader(req, myToken);
    }
    return next.handle(editedRequest);
  }

  /* TODO: Find a better way to determine which REST endpoints to use.
   *       Should probably have the store effects decide whether to use the public/protected routes
   *       by checking the auth state.
   */
  convertToUnprotectedURL(originalURL: string): string {
    switch (originalURL) {
      case AppConstant.BASE_URL + AppConstant.ITEM_URL + this.getLastPathVariable(originalURL):
        return AppConstant.BASE_URL + AppConstant.UNAUTHORIZED_ITEM_URL + this.getLastPathVariable(originalURL);
      case AppConstant.BASE_URL + AppConstant.ITEMS_URL:
        return AppConstant.BASE_URL + AppConstant.UNAUTHORIZED_ITEMS_URL;
      default:
        return originalURL;
    }
  }

  // TODO: This is replacing the header not appending
  appendAuthorizationHeader(req: HttpRequest<any>, token: string) {
    return req.clone({headers: req.headers.append('Authorization', `Bearer ${token}`)});
  }

  getLastPathVariable(url: string): string {
    const lastBackslashIndex = url.lastIndexOf('/');
    const result = url.slice(lastBackslashIndex + 1);
    return result;
  }
}
