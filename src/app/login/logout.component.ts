import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../core/authentication/token/token-storage.service';
import { Router } from '@angular/router';

@Component({
  template: ''
})
export class LogoutComponent implements OnInit {

  constructor(private tokenStorage: TokenStorageService, private router: Router) { }

  ngOnInit() {
    this.tokenStorage.destroyToken();
    this.router.navigate(['/login']);
  }

}
