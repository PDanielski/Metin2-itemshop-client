import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthTokenGuard } from './core/guards/auth-token-guard.guard';

const routes: Routes = [
  {path: '', redirectTo:'category/generic-items', pathMatch:'full'},
];
@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
