import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }  from './app.component';
import { NotesComponent } from './notes.component';
import { CategoriesComponent } from './categories.component';
import { NoteService } from './note.service';
import { CategoryService } from './category.service';

const appRoutes: Routes = [
  { path: 'notes', component: NotesComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: '', redirectTo: '/notes', pathMatch: 'full' },
];

@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
  ],
  declarations: [ 
    AppComponent,
    NotesComponent,
    CategoriesComponent,
  ],
  providers: [
    NoteService,
    CategoryService,
  ],
  bootstrap: [ 
    AppComponent,
  ],
})

export class AppModule { }
