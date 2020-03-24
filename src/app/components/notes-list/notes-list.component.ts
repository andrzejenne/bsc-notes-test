import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/notes.service';
import NoteEntity from 'src/app/entities/note';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.sass']
})
export class NotesListComponent implements OnInit {

  public list: NoteEntity[] = [];

  public selected: number | null = null;

  constructor(private notes: NotesService, private router: Router) { }

  ngOnInit(): void {
    this.loadNotes();
  }

  public selectNote(id: number) {
    if (this.selected && this.selected === id) {
      this.selected = null;
    } else {
      this.selected = id;
    }
  }

  public async removeNote(id: number) {
    this.selected = null;
    await this.notes.removeNote(id);
    this.list.splice(
      this.list.findIndex((item) => item.id === id), 1
    );
  }

  public onTap(id: number) {
    this.router.navigateByUrl('/list/' + id);
  }

  private async loadNotes() {
    this.list = await this.notes.getList();
  }

}
