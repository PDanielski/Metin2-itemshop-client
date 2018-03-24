import { Component, OnInit, Input } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { Item } from '../../core/item/item.model';
import { Order } from '../../core/order/order.model';
import { Currency } from '../../core/wallet/currency/currency.model';
import { OrderService } from '../../core/order/order.service';
import { WalletService } from '../../core/wallet/wallet.service';
import { CurrencyService } from '../../core/wallet/currency/currency.service';


@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {
  @Input() item: Item;
  order: Order;

  isSubmitting = false;
  isSubmitted = false;
  errorMessage = '';

  private currencyMap = new Map<string, Currency>();
  currencies: Currency[];
  constructor(
    private orderService: OrderService, 
    private walletService: WalletService,
    private currencyService: CurrencyService
  ) { }

  ngOnInit() {
    this.order = {
      count: 1,
      itemId: this.item.id,
      inventoryUsed: null,
      currencyUsed: null
    };

    for(let currency of this.currencyService.getAvailableCurrencies()){
      if(this.item.prices[currency.id]){
        this.currencyMap.set(currency.id,currency);
      }
    }

    this.currencies = Array.from(this.currencyMap.values());

  }

  submit(){
    this.isSubmitting = true;
    this.orderService.sendOrder(this.order)
    .finally(() => this.isSubmitting = false)
    .subscribe((data) => {
      this.isSubmitted = true;
      this.walletService.update();
    }, (error: HttpErrorResponse) => {
      this.handleOrderError(error.error.code);
    });
  }

  getInventoryNameFromId(id: string){
    if(id == "MALL"){
      return "Magazzino ItemShop";
    } else if(id == "INVENTORY"){
      return "Inventario";
    } else {
      return "Posto sconosciuto";
    }
  }

  handleOrderError(code: string|number){
    code = Number(code);
    if(code == 7408){
      this.errorMessage="Non hai abbastanza spazio per questo prodotto."
    } else if(code == 4407){
      this.errorMessage="Questo item non è in vendita";
    } else if(code == 4004){
      this.errorMessage="Impossibile leggere l'id del player";
    } else if(code == 4405){
      this.errorMessage="Questo item non può essere acquistato con la valuta selezionata";
    } else if(code == 4402){
      this.errorMessage="Il tuo account non può operare con la valuta selezionata";
    } else if(code == 4401){
      this.errorMessage="Non hai abbastanza "+this.order.currencyUsed+" per poter acquistare l'item";
    } else if(code == 4501){
      this.errorMessage="Non c'è un corriere settato per questo item, contatta l'amministratore del sito";
    } else if(code == 4404){
      this.errorMessage="L'item che si tenta di acquistare non esiste";
    } else if(code == 4400){
      this.errorMessage="Richiesta di acquisto item non valida";
    } else {
      this.errorMessage="Errore sconosciuto";
    }
  }
}
