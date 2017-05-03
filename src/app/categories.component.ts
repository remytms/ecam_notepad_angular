import { Component, OnInit, Input } from '@angular/core';


import { Category } from './category';
import { CATEGORIES } from './mock-categories';
import { CategoryService } from './category.service';

@Component({
  selector: 'my-categories',
  templateUrl: './app/categories.component.html',
})

export class CategoriesComponent implements OnInit {
  title = 'Notepad';

  categories = CATEGORIES;
  category_edited = -1;
  new_category: Category = null;

  constructor(
    private category_service: CategoryService) {
  }

  getCategories(): void {
    this.category_service.getCategories().subscribe(
      // function that runs on success
      data => { this.categories = data},
      // function that runs on error
      err => console.error(err),
      // function that runs on completion
      () => console.log(this.categories)
    );
  }

  validate(category: Category) {
    console.log(category);
    this.category_edited = -1;
  }

  post_category(category: Category) {
    console.log(category);
  }

  init_new_category() {
    this.new_category = new Category();
  }

  del_new_category() {
    this.new_category = null;
  }

  ngOnInit(): void {
    this.getCategories();
  }
}
