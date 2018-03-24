import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { WalletModule } from './wallet/wallet.module';
import { CategoryModule } from './category/category.module';
import { SharedModule } from './shared/shared.module';
import { OrderModule } from './order/order.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    BrowserAnimationsModule,
    CoreModule,
    SharedModule.forRoot(),
    LoginModule,
    WalletModule,
    OrderModule,
    CategoryModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

