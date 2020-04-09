import { Component } from '@angular/core';
import { DynamicHTMLModule, DynamicHTMLComponent } from './core/components/dynamic-html';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() { }

  ngOnInit() {
  }

}
