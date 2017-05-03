import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Note } from './note';
import { NOTES } from './mock-notes';

@Injectable()
export class NoteService {
  private notesUrl = 'http://localhost:8070/notepad/api';

  constructor(private http: Http) {}

  getNotes() { 
    //const url = `${this.notesUrl}/${id}`;
    const url = this.notesUrl + '/notes';
    return this.http.get(url)
      .map((res: Response) => res.json());
  }
}
