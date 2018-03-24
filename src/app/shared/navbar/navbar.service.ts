import { Injectable } from '@angular/core';
import { TokenStorageService } from '../../core/authentication/token/token-storage.service';

@Injectable()
export class NavbarService {
    visible = false;

    constructor(private tokenStorage: TokenStorageService){}


    canBeShown(){
        let token = this.tokenStorage.getToken();
        return token && !token.isExpired();
    }

    show(){
        this.visible = true;
    }

    hide(){
        this.visible = false;
    }
}