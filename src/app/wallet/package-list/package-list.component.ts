import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Package } from '../../core/wallet/shop-packages/package.model';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-package-list',
  templateUrl: './package-list.component.html',
  styleUrls: ['./package-list.component.css']
})
export class PackageListComponent implements OnInit {
  packages: Observable<Package[]>;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.packages = this.route.data.map((data) => data.packages);
  }
}
