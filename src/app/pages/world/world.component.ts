import { Component, OnInit } from '@angular/core';
import { DynamicHTMLModule, DynamicHTMLComponent } from '../../core/components/dynamic-html';
import { Filter, ResultSearchEvent} from '../../components/search/namespace';

@Component({
  selector: 'app-world',
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.scss']
})
export class WorldComponent implements OnInit {
    filterValues: Filter[]=[];
    reloadChartsRow01=true;

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

  constructor() { }

  ngOnInit() {
  }

}
