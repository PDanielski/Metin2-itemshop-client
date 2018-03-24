import { Injectable } from '@angular/core';
import { Item } from './item.model';
@Injectable()
export class ItemFactoryService {
  constructor() { }

  createFromJson(json: any){
    let item = new Item();
    item.availableDestinations = json.availableDestinations;
    item.canBeSold = json.canBeSold;
    item.category = json.category;
    item.teaser = json.teaser;
    item.desc = json.desc;
    item.destination = json.destination;
    item.discount = json.discount;
    item.icon = json.icon;
    item.id = json.id;
    item.isMultilingual = json.isMultilingual;
    item.isStackable = json.isStackable;
    item.name = json.name;
    item.prices = json.prices;
    item.type = json.type;
    return item;
  }
}
