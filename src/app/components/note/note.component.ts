import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotesService } from 'src/app/notes.service';
import NoteEntity from 'src/app/entities/note';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.sass']
})
export class NoteComponent implements OnInit {

  public note: NoteEntity = {
    id: null,
    title: ''
  };

  public modeTitle = 'Create Note';

  public saveTitle = 'Create';

  public saveColor = 'primary';

  public error = '';

  constructor(private router: Router, private route: ActivatedRoute, private service: NotesService) { }

  ngOnInit(): void {
    if (this.route.snapshot.params.id > 0) {
      this.modeTitle = 'Edit Note';
      this.saveTitle = 'Update';
      this.saveColor = 'accent';

      this.loadNote(this.route.snapshot.params.id);
    }
  }

  public cancel() {
    this.router.navigateByUrl('/list');
  }

  public async save() {
    if (this.note.id) {
      await this.service.updateNote(this.note.id, this.note.title);
    } else {
      await this.service.createNote(this.note.title);
    }

    this.cancel();
  }

  private async loadNote(id: number) {
    try {
      this.note = await this.service.getNote(id);
    } catch (e) {
      this.error = e.message || 'Loading error !!!';
    }
  }

}
