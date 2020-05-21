import { Component, OnInit } from '@angular/core';
import { DynamicHTMLModule, DynamicHTMLComponent } from '../../core/components/dynamic-html';
import { Filter, ResultSearchEvent} from '../../components/search/namespace';
import {UtilsService} from '../../services/utils.service';
import {BasePage01Component} from '../base-page01/base-page01.component';

@Component({
  selector: 'app-world',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends BasePage01Component {

    constructor(_utilsService:UtilsService){
        super(_utilsService);
    }

    removeFilter(filterParam: Filter) {
        super.removeFilter(filterParam);

        this.ChartsRowReloader();
    }

    /**
     * action on facet click
     *
     * @param {object} type the type
     */
    searchAggregation(event: Filter[]) {
        super.searchAggregation(event);

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
