import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { NavbarService } from './navbar/navbar.service';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    RouterModule,
    MatProgressSpinnerModule
  ],
  declarations: [NavbarComponent],
  exports: [NavbarComponent]
})
export class SharedModule { 
  static forRoot(): ModuleWithProviders{
    return {
      ngModule: SharedModule,
      providers: [NavbarService]
    };
  }
}
