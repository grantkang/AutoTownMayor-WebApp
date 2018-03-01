import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AppConstant } from '../../app.constant';

export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Intercepted!', req);
    console.log(req.params);

    const myToken = localStorage.getItem('token');
    const originalURL = req.url;
    let editedRequest;

    if (myToken == null) {
      const newURL = this.convertToUnprotectedURL(originalURL);
      console.log(newURL);
      editedRequest = req.clone({url: newURL});
    } else {
      editedRequest = this.appendAuthorizationHeader(req, myToken);
    }
    console.log(editedRequest);
    return next.handle(editedRequest);
  }

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

  appendAuthorizationHeader(req: HttpRequest<any>, token: string) {
    const authHeader = new HttpHeaders({'Authorization': `Bearer ${token}`});
    return req.clone({headers: authHeader});
  }

  getLastPathVariable(url: string): string {
    const lastBackslashIndex = url.lastIndexOf('/');
    const result = url.slice(lastBackslashIndex + 1);
    return result;
  }
}
