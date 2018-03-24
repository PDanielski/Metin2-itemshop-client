import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { TokenStorageService } from '../authentication/token/token-storage.service';

@Injectable()
export class AuthHttpInterceptor implements HttpInterceptor {

  constructor(private tokenStorage: TokenStorageService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token = this.tokenStorage.getToken();
    if(token && !token.isExpired()){
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token.getId()}`
        }
      });
    }

    return next.handle(request);
  }
}