import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Filter } from '../namespace';

@Component({
  selector: 'app-search-pill',
  templateUrl: './search-pill.component.html',
  styleUrls: ['./search-pill.component.css']
})
/**
 * Contains all the search criterias and filter criterias used and
 * allows the user to delete any search criteria used for searching.
 */
export class SearchPillComponent implements OnInit {

    /** List of filters used for searching */
    @Input() filterValues: Filter[];
    /** Event specifying the filter criteria to be deleted */
    @Output() resetFilterCriteriaEvent: EventEmitter<Filter> = new EventEmitter<Filter>();

    constructor() { }

    /**
     * get an element from filterValues by type
     *
     * @param {string} key the key
     * @param {Filter[]} filters the filter array to search
     * @return {Filter} the elements found, [] otherwise
     */
    getFilterValueByKey(key:string, filters:Filter[]):Filter{
        return filters.filter(e=>(e.key===key))[0];
    }

    ngOnInit() {}

    removeFilter(filterCondition: Filter) {
        this.resetFilterCriteriaEvent.emit(filterCondition);
    }
}
