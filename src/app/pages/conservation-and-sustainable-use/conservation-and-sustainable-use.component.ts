import { Component, OnInit } from '@angular/core';
import { DynamicHTMLModule, DynamicHTMLComponent } from '../../core/components/dynamic-html';
import { Filter, ResultSearchEvent} from '../../components/search/namespace';
import {UtilsService} from '../../services/utils.service';
import {BasePage01Component} from '../base-page01/base-page01.component';

@Component({
  selector: 'app-conservation-and-sustainable-use',
  templateUrl: './conservation-and-sustainable-use.component.html',
  styleUrls: ['./conservation-and-sustainable-use.component.scss']
})
export class ConservationAndSustainableUseComponent extends BasePage01Component  {
    countryName:string;

    constructor(_utilsService:UtilsService){
        super(_utilsService);
    }



    /**
     * action on facet click
     *
     * @param {object} type the type
     */
    searchAggregation(event: Filter[]) {
        if(event[0].key==="countries") this.countryName=event[0].value;

        return super.searchAggregation(event);
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
        if(key==="countries") this.countryName=null;

        return super.removeFilterByKeyVal(filters, key, value);
    }


}
