import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Package } from '../../core/wallet/shop-packages/package.model';
import { PackageService } from '../../core/wallet/shop-packages/package.service';

@Injectable()
export class PackageListResolver implements Resolve<Package[]> {

    constructor(private packageService: PackageService){}

    resolve(route: ActivatedRouteSnapshot, rstate: RouterStateSnapshot): Observable<Package[]>{
        return this.packageService.getPackages();
    }
}