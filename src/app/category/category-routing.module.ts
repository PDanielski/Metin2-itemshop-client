import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CategoryComponent } from './category.component';
import { ItemListComponent } from './item-list/item-list.component';
import { AuthTokenGuard } from '../core/guards/auth-token-guard.guard';
import { ItemListResolver } from './item-list/item-list.resolver';

const routes: Routes = [
  { path: 'category/:link',
    component: CategoryComponent,
    canActivate: [AuthTokenGuard],
    children: [
      { 
        path: '', 
        component: ItemListComponent, 
        resolve: {
          items: ItemListResolver
        }
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  providers:  [ItemListResolver ],
  exports: [ RouterModule ]
})
export class CategoryRoutingModule { }
