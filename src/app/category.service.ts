import { Injectable } from '@angular/core';

import { Category } from './category';
import { CATEGORIES } from './mock-categories';

@Injectable()
export class CategoryService {
  getCategories(): Promise<Category[]> {
    return Promise.resolve(CATEGORIES);
  }

  getCategoriesSlowly(): Promise<Category[]> {
    return new Promise(resolve => {
      // Simulate a server latency with 2 seconds delay
      setTimeout(() => resolve(this.getCategories()), 2000);
    });
  }
}
