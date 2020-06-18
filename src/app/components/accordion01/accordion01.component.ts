import { Component, OnInit, Input, Output, EventEmitter, ContentChild, TemplateRef  } from '@angular/core';
import { Filter } from '../../components/search/namespace';

@Component({
  selector: 'app-accordion01',
  templateUrl: './accordion01.component.html',
  styleUrls: ['./accordion01.component.scss']
})
export class Accordion01Component {
    @Input() isOpen:boolean = false;
    @Output() isOpenChange = new EventEmitter<boolean>();

    /** List of filters used for searching */
    @Input() filterValues: Filter[];
    /** Event specifying the filter criteria to be deleted */
    @Output() resetFilterCriteriaEvent: EventEmitter<Filter> = new EventEmitter<Filter>();

    constructor() {
    }

    toggleCollapse(collapsed:boolean){
        this.isOpen=!collapsed;
        this.isOpenChange.emit(this.isOpen);
    }

    removeFilter(filterCondition: Filter) {
        this.resetFilterCriteriaEvent.emit(filterCondition);
    }

}
