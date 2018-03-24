import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LoginComponent } from './login.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { LoginRoutingModule } from './login-routing.module';
import { UsernamePasswordAuthenticator } from '../core/authentication/user-password-authenticator.service';
import { TokenStorageService } from '../core/authentication/token/token-storage.service';
import { LogoutComponent } from './logout.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LoginRoutingModule,
    NgbModule
  ],
  declarations: [LoginComponent, LoginFormComponent, LogoutComponent],
  providers: []
})
export class LoginModule { }
