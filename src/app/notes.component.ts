import { Component, OnInit, Input } from '@angular/core';

import { Category } from './category';
import { Note } from './note';
import { CATEGORIES } from './mock-categories';
import { NOTES } from './mock-notes';
import { NoteService } from './note.service';

@Component({
  selector: 'my-notes',
  templateUrl: './app/notes.component.html',
})

export class NotesComponent implements OnInit { 
  title = 'Notepad';

  //@Input() notes = NOTES;
  notes = NOTES;
  categories = CATEGORIES;
  note_edited = -1;
  new_note: Note = null;

  constructor(
    private noteService: NoteService) {
  }

  getNotes(): void {
    this.noteService.getNotes().subscribe(
      // function that runs on success
      data => { this.notes = data},
      // function that runs on error
      err => console.error(err),
      // function that runs on completion
      () => console.log(this.notes)
    );
  }

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

  ngOnInit(): void {
    this.getNotes();
  }
}
