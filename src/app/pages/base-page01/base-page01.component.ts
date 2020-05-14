import { Component, OnInit } from '@angular/core';
import { DynamicHTMLModule, DynamicHTMLComponent } from '../../core/components/dynamic-html';
import { Filter, ResultSearchEvent} from '../../components/search/namespace';
import {UtilsService} from '../../services/utils.service';

@Component({
  selector: 'app-base-page01',
  template: ``,
  styles: []
})
export class BasePage01Component implements OnInit {
    filterValues: Filter[]=[];
    reloadCharts=true;


    constructor(private _utilsService:UtilsService){}

    ngOnInit(): void {}


    getFilterValueByKey=this._utilsService.getFilterValueByKey;


    /**
     * action on facet click
     *
     * @param {object} type the type
     */
    searchAggregation(event: Filter[]) {
        this.filterValues=event;

        this.ChartsRowReloader();
    }


    /**
     * remove a filter
     *
     * @param {Filter[]} filters the filters to clear
     * @param {string} key the key
     * @param {string} value the value
     * @return Filter[] the filters cleared
     */
    removeFilterByKeyVal(filters:Filter[], key:string, value:string):Filter[]{
        return filters.filter(e=>(e.key!=key && e.value!=value));
    }


    removeFilter(filterParam: Filter) {
        this.filterValues=this.removeFilterByKeyVal(this.filterValues, filterParam.key, filterParam.value);

        this.ChartsRowReloader();
    }


    /**
     * reload the Charts Row 01
     *
     */
    ChartsRowReloader(){
        setTimeout(() => this.reloadCharts = false);
        setTimeout(() => this.reloadCharts = true);
    }


}
