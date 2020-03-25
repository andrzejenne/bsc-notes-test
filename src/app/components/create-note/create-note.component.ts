import { Component, OnInit } from '@angular/core';
import { DetailComponent } from '../detail/detail.component';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.sass']
})
export class CreateNoteComponent extends DetailComponent implements OnInit {

  public modeTitle = 'Create Note';

  public saveTitle = 'Create';

  public saveColor = 'primary';

  ngOnInit(): void {
  }

  public cancel() {
    this.goBack();
  }

  public goToList() {
    this.router.navigateByUrl('/list');
  }

  public async save() {
    await this.service.createNote(this.note.title);

    this.goToList();
  }
}
