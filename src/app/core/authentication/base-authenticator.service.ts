import { EventDispatcher } from "../event/event-dispatcher.service";
import { TokenStorageService } from "./token/token-storage.service";
import { Token } from "./token/token.model";

export abstract class BaseAuthenticator {

    constructor(protected eventDispatcher: EventDispatcher, protected tokenStorage: TokenStorageService){}

    login(token: Token){
        this.tokenStorage.setToken(token);
        this.eventDispatcher.dispatch("authentication.login");
    }

    logout(){
        this.tokenStorage.destroyToken();
        this.eventDispatcher.dispatch("authentication.logout");
    }

    abstract authenticate(credentials);
}