import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Aggregation } from '../namespace';

@Component({
  selector: 'app-filter-terms',
  templateUrl: './filter-terms.component.html',
  styleUrls: ['./filter-terms.component.css']
})
export class FilterTermsComponent implements OnInit {

  @Input() aggregation: Aggregation;
  @Input() title: string;
  @Output() filterTermEvent: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  searchYear(key: string) {
    this.filterTermEvent.emit(key);
  }

}
