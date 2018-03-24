import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import * as jwt_decode from 'jwt-decode';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { TokenStorageService } from './token/token-storage.service';
import { Token } from './token/token.model';
import { environment } from '../../../environments/environment';
import { BaseAuthenticator } from './base-authenticator.service';
import { EventDispatcher } from '../event/event-dispatcher.service';

export interface UsernamePasswordAuthRequest {
  username: string,
  password: string
}

@Injectable()
export class UsernamePasswordAuthenticator extends BaseAuthenticator  {
  private apiUrl: string;

  constructor(
    private httpClient: HttpClient,
    protected tokenStorage: TokenStorageService,
    protected eventDispatcher: EventDispatcher
  ) {
    super(eventDispatcher, tokenStorage);
    this.apiUrl = environment.apiUrl;
   }

  authenticate(credentials: UsernamePasswordAuthRequest):Observable<Token>{
    const body = new HttpParams()
      .set('_username', credentials.username)
      .set('_password', credentials.password);

    const header = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded');

    return this.httpClient.post(this.apiUrl + '/login', body.toString(), {
      headers: header
    }).map(response => {
      if(response['token'] !== undefined){
        return Token.fromJWT(response['token']);
      }
    }).do((token: Token) => {
      this.login(token);
    });
  }

}
