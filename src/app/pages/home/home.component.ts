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
  }

}
