import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

import { Wallet } from './wallet.model';
import { CurrencyService } from './currency/currency.service';
import { environment } from '../../../environments/environment';

@Injectable()
export class WalletService {
  private _wallet = new BehaviorSubject<Wallet>(new Wallet());
  private apiUrl: string;
  private walletUpdateIntervalId;
  wallet = this._wallet.asObservable();
  
  constructor(
    private currencyService: CurrencyService, 
    private httpClient: HttpClient
  ) { this.apiUrl = environment.apiUrl; }

  update(){
    this.httpClient.get(this.apiUrl + "/my-wallet")
    .map((response) => {
      let wallet = new Wallet();
      for(let currency in response){
        if(this.currencyService.getCurrency(currency))
          wallet.setBalance(currency, response[currency]);
      }
      return wallet;
    }).subscribe((wallet: Wallet) => {
      this.manualUpdate(wallet);
    });
  }

  manualUpdate(wallet: Wallet){
    this._wallet.next(wallet);
  }

  reset(){
    this._wallet.next(new Wallet());
  }

}
