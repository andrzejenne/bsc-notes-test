import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/notes.service';
import NoteEntity from 'src/app/entities/note';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.sass']
})
export class NotesListComponent implements OnInit {

  public list: NoteEntity[] = [];

  public loading = true;

  public selected: number | null = null;

  constructor(private notes: NotesService) { }

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
  }

  private async loadNotes() {
    this.loading = true;
    this.list = await this.notes.getList();
    this.loading = false;
  }

}
