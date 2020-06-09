import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Filter } from '../../../components/search/namespace';

@Component({
  selector: 'app-chart-wrapper01',
  templateUrl: './chart-wrapper01.component.html',
  styles: []
})
export class ChartWrapper01Component {

    /** List of filters used for searching */
    @Input() filterValues: Filter[];
    /** Event specifying the filter criteria to be deleted */
    @Output() resetFilterCriteriaEvent: EventEmitter<Filter> = new EventEmitter<Filter>();

  constructor() { }

    removeFilter(filterCondition: Filter) {
        this.resetFilterCriteriaEvent.emit(filterCondition);
    }

}
