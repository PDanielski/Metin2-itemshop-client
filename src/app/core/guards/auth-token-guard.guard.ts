import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

import { TokenStorageService } from '../authentication/token/token-storage.service';

@Injectable()
export class AuthTokenGuard implements CanActivate {

  constructor(
    private router: Router,
    private tokenStorage: TokenStorageService
  ) { }

  canActivate() {
    let token = this.tokenStorage.getToken();
    if (token && !token.isExpired()) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }
}
