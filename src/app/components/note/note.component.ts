import { Component, OnInit } from '@angular/core';
import { DetailComponent } from 'src/app/components/detail/detail.component';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.sass']
})
export class NoteComponent extends DetailComponent implements OnInit {

  public modeTitle = 'Create Note';

  public saveTitle = 'Create';

  public saveColor = 'primary';

  ngOnInit(): void {
    if (this.route.snapshot.params.id > 0) {
      this.modeTitle = 'Edit Note';
      this.saveTitle = 'Update';
      this.saveColor = 'accent';

      this.loadNote(this.route.snapshot.params.id);
    }
  }

  public cancel() {
    this.goBack();
  }

  public async save() {
    if (this.note.id) {
      await this.service.updateNote(this.note.id, this.note.title);
    } else {
      await this.service.createNote(this.note.title);
    }

    this.cancel();
  }
}
