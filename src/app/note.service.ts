import { Injectable } from '@angular/core';

import { Note } from './note';
import { NOTES } from './mock-notes';

@Injectable()
export class NoteService {
  getNotes(): Promise<Note[]> {
    return Promise.resolve(NOTES);
  }

  getNotesSlowly(): Promise<Note[]> {
    return new Promise(resolve => {
      // Simulate a server latency with 2 seconds delay
      setTimeout(() => resolve(this.getNotes()), 2000);
    });
  }
}
