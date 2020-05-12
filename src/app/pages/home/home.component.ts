import { Component, OnInit } from '@angular/core';
import { DynamicHTMLModule, DynamicHTMLComponent } from '../../core/components/dynamic-html';
import { Filter, ResultSearchEvent} from '../../components/search/namespace';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    filterValues: Filter[]=[];
    reloadCharts=true;


    constructor(){
    }

    ngOnInit(): void {}




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
