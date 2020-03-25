import { Component, OnInit } from '@angular/core';
import { CreateNoteComponent } from '../create-note/create-note.component';

@Component({
  selector: 'app-edit-note',
  templateUrl: '../create-note/create-note.component.html',
  styleUrls: ['../create-note/create-note.component.sass']
})
export class EditNoteComponent extends CreateNoteComponent {

  public modeTitle = 'Edit Note';

  public saveTitle = 'Update';

  public saveColor = 'accent';

  public async save() {
      await this.service.updateNote(this.note.id, this.note.title);

      this.goToList();
  }
}
