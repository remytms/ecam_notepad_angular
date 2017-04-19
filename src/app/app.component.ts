import { Component } from '@angular/core';

import { Note } from './note';
import { NOTES } from './mock-notes';

@Component({
  selector: 'my-app',
  template: `
    <my-notes></my-notes>
  `
})

export class AppComponent  { 
}
