# NotesApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.7.

Installation is done by cloning https://github.com/andrzejenne/bsc-notes-test and installing dependencies
```bash
git clone https://github.com/andrzejenne/bsc-notes-test
cd bsc-notes-test
npm i
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

As requested in task specification, port 9000 is used by invoking 
```bash
npm run start
```
## UI
UI is designed for mobile platform.
Better UX experience on desktop would be achieved by adding platform specific conditions to component templates.

## Usage
Root page / is automatically redirected to /list, which displays list of notes.

Every note is single selectable by long press. App then displays remove and edit fabs.

By taping note, app enters detail page.

On detail page are 3 action buttons back, remove and edit.

On edit page is text field for title and action buttons cancel and update.

New note can be created by taping green + fab on list page.
This fab is hidden if any note is selected.

Localization can be switched between English and Czech in top right corner. App uses native localStorage to remember last locale setting. For more localization possibilites, menu component should be used instead.

## Known issues

There is no confirmation dialog for remove note actions.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
