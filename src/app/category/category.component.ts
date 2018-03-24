import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { CategoryService } from '../core/category/category.service';
import { Category } from '../core/category/category.model';
import { NavbarService } from '../shared/navbar/navbar.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  currentCategory: Observable<Category>;
  constructor(private route: ActivatedRoute, private categoryService: CategoryService, private nav: NavbarService){ }

  ngOnInit() {
    this.nav.show();
    this.route.params.map((params) => {
      return params['link'];
    }).subscribe((link) => {
      this.currentCategory = this.categoryService.getCategoryByLink(link);
    });
  }
  
  getRouterOutletState(outlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }
}
