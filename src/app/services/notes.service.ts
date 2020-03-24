import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from 'src/app/services/config.service';
import NoteEntity from 'src/app/entities/note';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  private url: string = this.config.apiUrl + 'notes';

  constructor(private http: HttpClient, private config: ConfigService) {
  }

  public getList() {
    return this.makeRequest<NoteEntity[]>('get', this.url);
  }

  public getNote(id: number) {
    return this.makeRequest<NoteEntity>('get', this.url + '/' + id);
  }

  public removeNote(id: number) {
    return this.makeRequest<void>('delete', this.url + '/' + id);
  }

  public createNote(title: string) {
    return this.makeRequest<NoteEntity>('post', this.url, {
      title
    });
  }

  public updateNote(id: number, title: string) {
    return this.makeRequest<NoteEntity>('put', this.url + '/' + id, {
      title
    });
  }

  private makeRequest<T>(type: string, url: string, data?: any) {
    return (
      data ?
        this.http[type](url, data).toPromise() :
        this.http[type](url).toPromise()
    ) as Promise<T>;
  }
}
