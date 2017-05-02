import { Component, Input } from '@angular/core';

import { Category } from './categoy';
import { Note } from './note';
import { CATEGORIES } from './mock-categories';
import { NOTES } from './mock-notes';

@Component({
  selector: 'my-notes',
  templateUrl: './app/notes.component.html',
})

export class NotesComponent  { 
  title = 'Notepad';

  //@Input() notes = NOTES;
  notes = NOTES;
  categories = CATEGORIES;
  note_edited = -1;
  new_note: Note = null;

  validate(note: Note) {
    console.log(note);
    this.note_edited = -1;
  }

  post_note(note: Note) {
    console.log(note);
  }

  init_new_note() {
    this.new_note = new Note();
  }

  del_new_note() {
    this.new_note = null;
  }
}
