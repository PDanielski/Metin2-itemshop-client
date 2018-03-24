import { Injectable } from '@angular/core';

import { EventSubscriber } from '../../event/event-subscriber.interface';
import { WalletService } from '../wallet.service';
import { TokenStorageService } from '../../authentication/token/token-storage.service';
import { EventDispatcher } from '../../event/event-dispatcher.service';


@Injectable()
export class WalletUpdateSubscriber implements EventSubscriber {
  private walletUpdateIntervalId;
  constructor(private walletService: WalletService, private tokenStorage: TokenStorageService) { }

  register(eventDispatcher: EventDispatcher){
    eventDispatcher.getEvent('authentication.login').subscribe(() => this.onLogin());
    eventDispatcher.getEvent('authentication.logout').subscribe(() => this.onLogout());
    eventDispatcher.getEvent('app.start').subscribe(() => this.onStartup());
  }

  onStartup(){
    let token = this.tokenStorage.getToken();
    if(token && !token.isExpired()){
      this.onLogin();
    } else {
      this.walletService.reset();
    }
  }

  onLogin(){
    if(this.walletUpdateIntervalId) clearInterval(this.walletUpdateIntervalId);
    this.walletService.update();
    this.walletUpdateIntervalId = setInterval(() => this.walletService.update(), 3500);
  }

  onLogout() {
    if(this.walletUpdateIntervalId) clearInterval(this.walletUpdateIntervalId);
    this.walletService.reset();
  }
}
