import { Injectable } from '@angular/core';
import * as moment from 'moment';

import { Token } from './token.model';

@Injectable()
export class TokenStorageService {
  protected storageId = 'token_obj';
  constructor() { }

  setToken(token: Token) {
    localStorage.setItem(this.storageId, token.toJson());
  }

  getToken(): Token {
    let tokenJsonString = localStorage.getItem(this.storageId);
    if (tokenJsonString) {
        return Token.fromJSON(tokenJsonString);
    }
    return null;
  }

  destroyToken(): void {
    localStorage.removeItem(this.storageId);
  }

}
