import { Component, OnInit } from '@angular/core';
import { DynamicHTMLModule, DynamicHTMLComponent } from '../../core/components/dynamic-html';
import { Filter, ResultSearchEvent} from '../../components/search/namespace';
import {UtilsService} from '../../services/utils.service';

@Component({
  selector: 'app-world',
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.scss']
})
export class WorldComponent implements OnInit {
    filterValues: Filter[]=[];
    reloadChartsRow01=true;

    getFilterValueByKey=this._utilsService.getFilterValueByKey;

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
        setTimeout(() => this.reloadChartsRow01 = false);
        setTimeout(() => this.reloadChartsRow01 = true);
    }


    /**
     * action on facet click
     *
     * @param {object} type the type
     */
    searchAggregation(event: Filter[]) {
        this.filterValues=event;

        this.ChartsRowReloader();
    }

    constructor(private _utilsService:UtilsService) { }

    ngOnInit() {
    }

}
