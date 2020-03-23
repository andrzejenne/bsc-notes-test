import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  // @todo should be passed into constructor
  public readonly apiUrl = 'https://private-anon-9aab095033-note10.apiary-mock.com/';

  constructor() { }
}
