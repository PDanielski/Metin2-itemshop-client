import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Category } from '../../core/category/category.model';
import { CategoryService } from '../../core/category/category.service';


@Component({
  selector: 'app-side-category-list',
  templateUrl: './side-category-list.component.html',
  styleUrls: ['./side-category-list.component.css']
})
export class SideCategoryListComponent implements OnInit {
  categories: Observable<Category[]>;
  
  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.categories = this.categoryService.getAllCategories();
  }

}
