import { Component, OnInit, Input} from '@angular/core';

import { Package } from '../../../core/wallet/shop-packages/package.model';
import { Currency } from '../../../core/wallet/currency/currency.model';
import { CurrencyService } from '../../../core/wallet/currency/currency.service';
import { PaypalDonationService } from '../../../core/wallet/donations/paypal-donation.service';


@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.css']
})
export class PackageComponent implements OnInit {
  @Input() package: Package;
  currencies: Currency[];
  private currencyMap = new Map<string, Currency>();

  constructor(private currencyService: CurrencyService, private paypalService: PaypalDonationService) { }

  ngOnInit() {
    let currencies = this.currencyService.getAvailableCurrencies();
    for(let currency of currencies){
      if(this.package.currencies[currency.id]){
        this.currencyMap.set(currency.id, currency);
      }
    }
    this.currencies = Array.from(this.currencyMap.values());
  }

  openPaypal(donationPackage){
    this.paypalService.getLinkFromPackage(donationPackage.id).subscribe((link) => {
      window.location.href = link + '&return='+ window.location.href+'&cancel_return='+window.location.href;
    });
  }
}
