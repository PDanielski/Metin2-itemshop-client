import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CategoryComponent } from './category.component';
import { SideCategoryListComponent } from './side-category-list/side-category-list.component';
import { CategoryRoutingModule } from './category-routing.module';
import { SharedModule } from '../shared/shared.module';

import { MatSidenavModule, MatCardModule , MatButtonModule, MatDialogModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemComponent } from './item-list/item/item.component';
import { OrderModule } from '../order/order.module';
import { OrderDialogComponent } from './item-list/order-dialog/order-dialog.component';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    CategoryRoutingModule,
    MatSidenavModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    SharedModule,
    FormsModule,
    OrderModule
  ],
  declarations: [CategoryComponent, SideCategoryListComponent, ItemListComponent, ItemComponent, OrderDialogComponent],
  entryComponents: [OrderDialogComponent]
})
export class CategoryModule { }
