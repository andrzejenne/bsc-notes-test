import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotesListComponent } from './components/notes-list/notes-list.component';
import { NoteComponent } from './components/note/note.component';

const routes: Routes = [
  {
    path: 'list',
    component: NotesListComponent
  },
  {
    path: 'list/new',
    component: NoteComponent
  },
  {
    path: 'list/:id',
    component: NoteComponent
  },
  {
    path: '',
    redirectTo: '/list',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }