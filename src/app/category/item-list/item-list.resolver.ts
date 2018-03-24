import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Item } from '../../core/item/item.model';
import { ItemService } from '../../core/item/item.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ItemListResolver implements Resolve<Item[]> {

    constructor(private itemService: ItemService){}

    resolve(route: ActivatedRouteSnapshot, rstate: RouterStateSnapshot): Observable<Item[]>{
        return this.itemService.getItemsByCategoryLink(route.params['link']);
    }
}