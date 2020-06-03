import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Filter } from '../namespace';
import {UtilsService} from '../../../services/utils.service';

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

    constructor(private _utilsService:UtilsService) { }

    /**
     * used to graphically groups pills of same type, eg.taxonomies and countries
     *
     * @param {string} currentKey the current key, eg.taxonomy
     * @param {Filter[]} filterValues the filterValues 
     * @returns {boolean} if the template can show this pill, false otherwise
     */
    public groupPills(currentKey:string, filterValues:Filter[]):boolean{

        if(!currentKey) return false;

        //if there is a specie don't show taxonomy
        if (currentKey==='taxonomies' && this._utilsService.getFilterValueByKey('species', filterValues)) return false; 

        //if there is a country or a region don't show continents
        if (
            currentKey==='continents' && 
            (this._utilsService.getFilterValueByKey('countries', filterValues) || this._utilsService.getFilterValueByKey('regions', filterValues))
        ) return false; 


        //if there is a country don't show region
        if (currentKey==='regions' && this._utilsService.getFilterValueByKey('countries', filterValues)) return false; 

        return true;
    }

    ngOnInit() {}

    removeFilter(filterCondition: Filter) {
        this.resetFilterCriteriaEvent.emit(filterCondition);
    }
}
