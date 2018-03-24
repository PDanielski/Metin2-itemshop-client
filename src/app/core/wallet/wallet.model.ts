import { Currency } from "./currency/currency.model";

export class Wallet {
    protected prices: Map<string, number> = new Map<string, number>();

    getBalance(currencyId: string): number {
        if(this.prices.has(currencyId)){
            return this.prices.get(currencyId);
        } else {
            return 0;
        }
    }

    setBalance(currencyId: string, amount: number){
        this.prices.set(currencyId, amount);
    }
    
    updateBalance(currencyId: string, amount: number) {
        if(this.prices.has(currencyId)){
            this.prices.set(currencyId, this.prices.get(currencyId) + amount );
        } else {
            throw new Error("Currency with id " + currencyId + " was not found in the wallet");
        }
    }
    
}