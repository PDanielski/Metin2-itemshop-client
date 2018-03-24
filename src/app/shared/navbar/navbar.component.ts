import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Wallet } from '../../core/wallet/wallet.model';
import { Currency } from '../../core/wallet/currency/currency.model';
import { CurrencyService } from '../../core/wallet/currency/currency.service';
import { WalletService } from '../../core/wallet/wallet.service';
import { TokenStorageService } from '../../core/authentication/token/token-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isNavbarCollapsed: boolean;
  
  wallet: Observable<Wallet>;
  currencies: Currency[];
  username: string;

  constructor(
    private walletService: WalletService, 
    private tokenStorage: TokenStorageService, 
    private currencyService: CurrencyService
  ) { }

  ngOnInit() {
    this.wallet = this.walletService.wallet;
    this.currencies = this.currencyService.getAvailableCurrencies();
    this.username = this.tokenStorage.getToken().getUsername();
  }

}
