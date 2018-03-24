import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { Item } from './item.model';
import { ItemFactoryService } from './item-factory.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ItemService {
  protected apiUrl: string;
  protected caches: {[categoryLink:string]: Item[]} = {};

  constructor(private itemFactory: ItemFactoryService, private httpClient: HttpClient) {
    this.apiUrl = environment.apiUrl;
   }

   getItemsByCategoryLink(link: string): Observable<Item[]> {
    if(this.caches[link]){
      return Observable.of(this.caches[link]);
    } else {
      return this.httpClient.get(this.apiUrl + '/category/' + link).map((response:any) => {

        let buff: Array<any> = new Array;
        response.forEach(elem => {
          buff.push(this.itemFactory.createFromJson(elem));
        });
        return buff;
      }).do((items)=>{
        this.caches[link] = items;
      });
    }
   }

}
