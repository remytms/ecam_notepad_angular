import { Component } from '@angular/core';

import { Note } from './note';
import { NOTES } from './mock-notes';

@Component({
  selector: 'my-notes',
  templateUrl: './app/notes.component.html',
})

export class NotesComponent  { 
  title = 'Notepad';
  notes = NOTES;
}
