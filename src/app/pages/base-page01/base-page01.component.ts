import { Component, OnInit } from '@angular/core';
import { DynamicHTMLModule, DynamicHTMLComponent } from '../../core/components/dynamic-html';
import { Filter, ResultSearchEvent} from '../../components/search/namespace';
import {UtilsService} from '../../services/utils.service';
import { AccordionProps } from '../../namespace';

export class BasePage01Component implements OnInit {
    filterValues: Filter[]=[];
    reloadCharts=true;
    selectedContinent:Filter;
    selectedRegion:Filter;
    selectedCountry:Filter;
    selectedTaxonomy:Filter;
    selectedSpecie:Filter;
    selectedFtype:Filter;
    selectedSftype:Filter;
    accordionsProps:AccordionProps[]=[];


    constructor(private _utilsService:UtilsService){}

    ngOnInit(): void {}


    getFilterValueByKey=this._utilsService.getFilterValueByKey;



    /**
     * event fired when FilterValues changes
     */
    onFilterValuesChange(){}

    /**
     * action on facet click
     *
     * @param {object} type the type
     */
    searchAggregation(event: Filter[]) {
        this.filterValues=event;

        this.selectedContinent=this.getFilterValueByKey('continents', event);
        this.selectedRegion=this.getFilterValueByKey('regions', event);
        this.selectedCountry=this.getFilterValueByKey('countries', event);
        this.selectedTaxonomy=this.getFilterValueByKey('taxonomies', event);
        this.selectedSpecie=this.getFilterValueByKey('species', event);
        this.selectedFtype=this.getFilterValueByKey('ftypes', event);
        this.selectedSftype=this.getFilterValueByKey('sftypes', event);

        this.onFilterValuesChange();
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
        if(key==="taxonomies") this.selectedTaxonomy=null;
        if(key==="species") this.selectedSpecie=null;
        if(key==="ftypes") this.selectedFtype=null;
        if(key==="sftypes") this.selectedSftype=null;

        return filters.filter(e=>(e.key!=key && e.value!=value));
    }


    removeFilter(filterParam: Filter) {
        this.filterValues=this.removeFilterByKeyVal(this.filterValues, filterParam.key, filterParam.value);

        this.onFilterValuesChange();
    }


    /**
     * onClick event of expandAllAccordion btn
     */
    expandAllAccordionOnClick(){
        this.accordionsProps=this.accordionsProps.map(e=>{
            e.isOpen=true;
            return e;
        });
    }


    /**
     * onClick event of collapseAllAccordion btn
     */
    collapseAllAccordionOnClick(){
        this.accordionsProps=this.accordionsProps.map(e=>{
            e.isOpen=false;
            return e;
        });
    }


   /**
    * check if all the visible accordions are collapsed
    *
    * @param {AccordionProps[]} accordionsProps the accordionsProps array
    * @returns {boolean} true if they are all collapsed
    */
   public isAllVisibleAccordionCollapsed(accordionsProps:AccordionProps[]):boolean {
       return accordionsProps.filter(a=>(a.isOpen && a.isVisible)).length===0;
   }



}
