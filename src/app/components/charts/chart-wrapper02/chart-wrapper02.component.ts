import { Component, OnInit, Input, Output, EventEmitter, ContentChild, TemplateRef  } from '@angular/core';
import { Filter } from '../../../components/search/namespace';

@Component({
  selector: 'app-chart-wrapper02',
  templateUrl: './chart-wrapper02.component.html',
  styleUrls: ['./chart-wrapper02.component.scss']
})
export class ChartWrapper02Component {
    @Input() isCollapsed:boolean = true;
    @Output() isCollapsedChange = new EventEmitter<boolean>();

    /** List of filters used for searching */
    @Input() filterValues: Filter[];
    /** Event specifying the filter criteria to be deleted */
    @Output() resetFilterCriteriaEvent: EventEmitter<Filter> = new EventEmitter<Filter>();

    constructor() { }

    toggleCollapse(collapsed:boolean){
        this.isCollapsed=!collapsed;
        this.isCollapsedChange.emit(this.isCollapsed);
    }

    removeFilter(filterCondition: Filter) {
        this.resetFilterCriteriaEvent.emit(filterCondition);
    }

}
