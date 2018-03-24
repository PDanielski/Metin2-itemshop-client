import { Injectable } from '@angular/core';

import { Currency } from './currency.model';

const availableCurrencies: Currency[] = [
  { id: 'gold', iconHref: 'assets/gold_icon.png', name: 'Gold', class: 'btn-outline-warning', href:'/wallet/packages' },
  { id: 'warpoints', iconHref: 'assets/warpoints_icon.png', name: 'Warpoints', class: 'btn-outline-primary', href:'/'},
  { id: 'biscuits', iconHref: 'assets/biscuit_icon.png', name: 'Biscotti', class: 'btn-outline-success', href:'/'}
];

@Injectable()
export class CurrencyService {

  constructor() { }

  getAvailableCurrencies(): Currency[] {
    return availableCurrencies;
  }

  getCurrency(id:string): Currency {
    for(let currency of availableCurrencies){
      if( currency.id === id ) return currency;
    }
    return null;
  }
}
