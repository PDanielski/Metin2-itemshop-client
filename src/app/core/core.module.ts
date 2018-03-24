import { NgModule, InjectionToken, Optional, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { UsernamePasswordAuthenticator } from './authentication/user-password-authenticator.service';
import { TokenStorageService } from './authentication/token/token-storage.service';
import { AuthTokenGuard } from './guards/auth-token-guard.guard';
import { AuthHttpInterceptor } from './interceptors/auth-http.interceptor';
import { EventDispatcher } from './event/event-dispatcher.service';
import { WalletService } from './wallet/wallet.service';
import { ItemService } from './item/item.service';
import { CategoryService } from './category/category.service';
import { ItemFactoryService } from './item/item-factory.service';
import { PackageService } from './wallet/shop-packages/package.service';
import { CurrencyService } from './wallet/currency/currency.service';
import { WalletUpdateSubscriber } from './wallet/subscribers/wallet-update-subscriber.service';
import { OrderService } from './order/order.service';
import { PaypalDonationService } from './wallet/donations/paypal-donation.service';
import { EVENT_SUBSCRIBERS, EventSubscriber } from './event/event-subscriber.interface';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [],
  providers: [
    UsernamePasswordAuthenticator,
    TokenStorageService,
    AuthTokenGuard,
    EventDispatcher,
    WalletService,
    ItemService,
    ItemFactoryService,
    CategoryService,
    PackageService,
    CurrencyService,
    OrderService,
    PaypalDonationService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHttpInterceptor,
      multi: true
    },
    {
      provide: EVENT_SUBSCRIBERS,
      useClass: WalletUpdateSubscriber,
      multi: true
    }
  ]
})
export class CoreModule {

  constructor(@Optional() @Inject(EVENT_SUBSCRIBERS) subscribers: EventSubscriber[], dispatcher: EventDispatcher){
    console.log(subscribers);
    dispatcher.registerSubscribers(subscribers);
  }
 }
