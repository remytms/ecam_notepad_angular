import { Component, Input } from '@angular/core';


import { Category } from './category';
import { CATEGORIES } from './mock-categories';

@Component({
  selector: 'my-categories',
  templateUrl: './app/categories.component.html',
})

export class CategoriesComponent  { 
  title = 'Notepad';

  categories = CATEGORIES;
  category_edited = -1;
  new_category: Category = null;

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
}
