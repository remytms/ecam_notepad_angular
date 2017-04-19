import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { NotesComponent } from './notes.component';
import { NoteService } from './note.service';

@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
  ],
  declarations: [ 
    AppComponent,
    NotesComponent,
  ],
  providers: [
    NoteService,
  ],
  bootstrap: [ 
    AppComponent,
  ],
})

export class AppModule { }
