import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  public lang: string | null = null;

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
    this.setLang(localStorage.getItem('locale') || 'en');
  }

  public setLang(code: string) {
    this.lang = code;
    this.translate.use(code);
    localStorage.setItem('locale', code);
  }
}
