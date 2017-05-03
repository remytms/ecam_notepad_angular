import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Category } from './category';
import { CATEGORIES } from './mock-categories';

@Injectable()
export class CategoryService {
  private notesUrl = 'http://localhost:8070/notepad/api';

  constructor(private http: Http) {}

  getCategories() { 
    const url = `${this.notesUrl}/categories`;
    return this.http.get(url)
      .map((res: Response) => res.json());
  }
}
