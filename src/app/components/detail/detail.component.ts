import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotesService } from 'src/app/services/notes.service';
import NoteEntity from 'src/app/entities/note';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.sass']
})
export class DetailComponent implements OnInit {

  public note: NoteEntity = {
    id: null,
    title: ''
  };

  public error = '';

  constructor(protected router: Router, protected route: ActivatedRoute, protected service: NotesService, protected location: Location) { }

  ngOnInit(): void {
    if (this.route.snapshot.params.id > 0) {
      this.loadNote(this.route.snapshot.params.id);
    }
  }

  public goBack() {
    this.location.back();
    // this.router.navigateByUrl('/list');
  }

  public async remove() {
    await this.service.removeNote(this.note.id);
    this.goBack();
  }

  protected async loadNote(id: number) {
    try {
      this.note = await this.service.getNote(id);
    } catch (e) {
      this.error = e.message || 'Loading error !!!';
    }
  }

}
