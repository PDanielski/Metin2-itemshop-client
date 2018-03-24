import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PackageListComponent } from './package-list/package-list.component';
import { PackageListResolver } from './package-list/package-list.resolver';

const routes: Routes = [
  { 
    path: "wallet/packages", 
    component: PackageListComponent,
    resolve: {
      packages: PackageListResolver
    }
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  providers: [PackageListResolver],
  exports: [RouterModule]
})
export class WalletRoutingModule { }
