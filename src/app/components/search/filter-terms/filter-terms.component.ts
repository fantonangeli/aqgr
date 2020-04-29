import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { Filter, Aggregation } from '../namespace';

@Component({
  selector: 'app-filter-terms',
  templateUrl: './filter-terms.component.html',
  styleUrls: ['./filter-terms.component.css']
})
export class FilterTermsComponent implements OnChanges {

    @Input() aggregation: Aggregation;
    @Input() title: string;
    @Input() searchEnabled: boolean=false;
    @Input() selectedFilter: Filter;
    @Output() filterTermEvent: EventEmitter<string> = new EventEmitter<string>();
    @Output() filterByName: EventEmitter<string> = new EventEmitter<string>();
    searchText:string="";

    constructor() { }

    ngOnChanges() {
        console.log();
    }

    onSearchChange(searchValue: string): void {  
        this.filterByName.emit(searchValue);
    }

    searchYear(key: string) {
        this.searchText="";
        this.filterTermEvent.emit(key);
    }

}
