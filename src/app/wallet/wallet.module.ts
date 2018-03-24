import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { EventDispatcher } from '../core/event/event-dispatcher.service';
import { PackageListComponent } from './package-list/package-list.component';
import { WalletRoutingModule } from './wallet-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MatButtonToggleModule, MatCardModule, MatButtonModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { CentToEurPipe } from './cent-to-eur.pipe';
import { PackageComponent } from './package-list/package/package.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    WalletRoutingModule,
    SharedModule,
    MatButtonModule,
    MatCardModule,
    FormsModule
  ],
  declarations: [PackageListComponent, CentToEurPipe, PackageComponent]
})
export class WalletModule {}

