import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { MatDialog } from '@angular/material';

import { OrderDialogComponent } from '../order-dialog/order-dialog.component';
import { Item } from '../../../core/item/item.model';
import { Currency } from '../../../core/wallet/currency/currency.model';
import { CurrencyService } from '../../../core/wallet/currency/currency.service';
import { WalletService } from '../../../core/wallet/wallet.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() item: Item;
  private currencyMap = new Map<string,Currency>();
  currencies: Currency[];
  constructor(
    private currencyService: CurrencyService, 
    private walletService: WalletService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    if(!this.item.icon){
      this.item.icon = {
        href: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
        id: 'default',
        isAbsolute: true,
        name: 'Icona di defualt'
      };
    }
    let currencies = this.currencyService.getAvailableCurrencies();
    for(let currency of currencies){
      if(this.item.prices[currency.id]){
        this.currencyMap.set(currency.id, currency);
      }
    }
    this.currencies = Array.from(this.currencyMap.values());
  }

  openOrderForm(){
    this.dialog.open(OrderDialogComponent, {
      data: {
        item: this.item
      }
    });
  }

  isCurrencySupported(currencyId: string){
    return this.currencyMap.has(currencyId);
  }
}
