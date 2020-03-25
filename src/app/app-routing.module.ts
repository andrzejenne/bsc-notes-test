import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotesListComponent } from './components/notes-list/notes-list.component';
import { DetailComponent } from './components/detail/detail.component';
import { CreateNoteComponent } from './components/create-note/create-note.component';
import { EditNoteComponent } from './components/edit-note/edit-note.component';

const routes: Routes = [
  {
    path: 'list',
    component: NotesListComponent
  },
  {
    path: 'list/new',
    component: CreateNoteComponent
  },
  {
    path: 'list/:id',
    component: DetailComponent
  },
  {
    path: 'list/:id/edit',
    component: EditNoteComponent
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
