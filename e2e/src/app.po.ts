import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getNotesList() {
    return element.all(by.css('app-root app-notes-list mat-list-item'));
  }
}
