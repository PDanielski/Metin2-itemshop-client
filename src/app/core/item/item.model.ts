import { Discount } from "./discount.model";
import { Icon } from "./icon.model";
import { Category } from "../category/category.model";

export class Item {
    id: string;
    name: string;
    desc: string;
    teaser: string;
    category: Category;
    isMultilingual: boolean = false;
    canBeSold: boolean = true;
    prices: {[currency: string]: number} = {};
    availableDestinations: {[inventory: string]: boolean} = {
        "MALL":true,
        "INVENTORY":false
    };
    icon: Icon;
    discount: {[currency: string]: Discount};
    type: string;
    destination: string;
    isStackable: Boolean = true;

    canBeStacked(){
        return this.isStackable;
    }
    
    getPrice(currency:string){
        if(this.prices[currency]){
            if(this.discount[currency]){
                return this.discount[currency].newAmount;
            } else {
                return this.prices[currency];
            }
        }
    }
}