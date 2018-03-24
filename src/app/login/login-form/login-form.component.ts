import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/finally';
import { Subscription } from 'rxjs/Subscription';

import { UsernamePasswordAuthRequest, UsernamePasswordAuthenticator } from '../../core/authentication/user-password-authenticator.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnDestroy {
  credentials: UsernamePasswordAuthRequest = {
    username: '',
    password: ''
  };
  isSubmitting = false;
  isInErrorState = false;

  private subscription: Subscription;
  constructor(
    private authenticator: UsernamePasswordAuthenticator,
    private router: Router
  ) { }

  submit(){
    this.isSubmitting = true;
    this.subscription = this.authenticator.authenticate(this.credentials).finally(() => this.isSubmitting = false)
    .subscribe(token => {
        this.isInErrorState = false;
        this.router.navigate(['/']);
      }, (err) => {
        console.log(err);
        this.isInErrorState = true;
      });
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
