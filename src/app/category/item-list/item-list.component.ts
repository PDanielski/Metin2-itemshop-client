import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { ItemService } from '../../core/item/item.service';
import { Item } from '../../core/item/item.model';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  items: Observable<Item[]>;
  constructor(private route: ActivatedRoute, private itemService: ItemService ) { }

  ngOnInit() {
    this.items = this.route.data.map((data) => data.items);
  }

}
