# AqGR InformationSystem

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.25.

## Installation

Install angular-cli
```
npm install -g @angular/cli
```

Install project dependencies
```
npm install
```

## Dependencies

Build and install AqGR-lib.  
Clone aqgr-lib and follow the instructions in the README.md.
From this folder run:
```
npm link aqgr-lib 
```

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Production server

Run `npm run startprod` for a local prodution server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Json server

Run `npm run jsonserver` for a dev server. Navigate to `http://localhost:3000/{element}`.

## Visual regression tests

Install backstopjs: `npm install -g backstopjs`

Compare snapshots with localhost: `backstop test`

Approve snapshots: `backstop approve`

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Generate screenshots

Run `npm run screenshots` to generate screenshots of the app in the screenshots folder.

## Known issues

* Error: ENOSPC: System limit for number of file watchers reached, watch '  
This is caused by the size of the json db. Solution (tested on Linux):  
`export CHOKIDAR_USEPOLLING=1`

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
