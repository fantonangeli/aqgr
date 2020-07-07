import { Component, OnInit, OnChanges } from '@angular/core';
import { DynamicHTMLModule, DynamicHTMLComponent } from '../../core/components/dynamic-html';
import { Filter, ResultSearchEvent} from '../../components/search/namespace';
import {UtilsService} from '../../services/utils.service';
import {BasePage01Component} from '../base-page01/base-page01.component';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-conservation-and-sustainable-use',
  templateUrl: './conservation-and-sustainable-use.component.html',
  styleUrls: ['./conservation-and-sustainable-use.component.scss']
})
export class ConservationAndSustainableUseComponent extends BasePage01Component {
    selectedSpecie:Filter;
    selectedContinent:Filter;
    selectedRegion:Filter;
    selectedCountry:Filter;

    initialAccordionsIsOpen:boolean=environment.defaultAccordionIsOpenValue;
    isAccordion01open:boolean=true;
    isAccordion02open:boolean=this.initialAccordionsIsOpen;
    isAccordion03open:boolean=this.initialAccordionsIsOpen;
    isAccordion04open:boolean=this.initialAccordionsIsOpen;
    isAccordion05open:boolean=this.initialAccordionsIsOpen;
    isAccordion06open:boolean=this.initialAccordionsIsOpen;
    isAccordion07open:boolean=this.initialAccordionsIsOpen;
    isAccordion08open:boolean=this.initialAccordionsIsOpen;
    isAccordion09open:boolean=this.initialAccordionsIsOpen;
    isAccordion10open:boolean=this.initialAccordionsIsOpen;
    isAccordion11open:boolean=this.initialAccordionsIsOpen;
    isAccordion12open:boolean=this.initialAccordionsIsOpen;
    isAccordion13open:boolean=this.initialAccordionsIsOpen;

    constructor(_utilsService:UtilsService){
        super(_utilsService);
    }



    /**
     * action on facet click
     *
     * @param {object} type the type
     */
    searchAggregation(event: Filter[]) {
        this.selectedContinent=this.getFilterValueByKey('continents', event);
        this.selectedRegion=this.getFilterValueByKey('regions', event);
        this.selectedCountry=this.getFilterValueByKey('countries', event);
        this.selectedSpecie=this.getFilterValueByKey('species', event);

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
        if(key==="continents") this.selectedContinent=null;
        if(key==="regions") this.selectedRegion=null;
        if(key==="countries") this.selectedCountry=null;
        if(key==="species") this.selectedSpecie=null;

        return super.removeFilterByKeyVal(filters, key, value);
    }


}
