import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { Filter, Aggregation, AggregationItem } from '../namespace';

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
    @Output() filterTermEvent: EventEmitter<AggregationItem> = new EventEmitter<AggregationItem>();
    @Output() filterByName: EventEmitter<string> = new EventEmitter<string>();
    @Input() searchText:string="";

    constructor() { }

    ngOnChanges() {
    }

    onSearchChange(searchValue: string): void {  
        this.filterByName.emit(searchValue);
    }

    search(aggregation:AggregationItem) {
        this.filterTermEvent.emit(aggregation);
    }

}
