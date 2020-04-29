import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import {FilterTermsComponent} from '../../../components/search/filter-terms/filter-terms.component';
import { Filter, AggregationInput, ResultComponent, ResultList, ResultSearchEvent, ViewTypeEnum } from '../../../components/search/namespace';
import {TaxonomiesService} from '../../../services/taxonomies.service';
import {SpeciesService} from '../../../services/species.service';
import {CountriesFtypeService} from '../../../services/countries-ftype.service';
import {CountriesSFtypeService} from '../../../services/countries-sftype.service';


@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styles: []
})
export class FiltersComponent implements OnChanges {
    private _countriesFtypeService;
    private _countriesSFtypeService;
    private _speciesService;
    @Input() filterValues: Filter[];
    aggregations: AggregationInput[];

  @Output() search = new EventEmitter<Filter[]>();


  constructor(countriesFtypeService:CountriesFtypeService, speciesService:SpeciesService, countriesSFtypeService:CountriesSFtypeService) {
        this._countriesFtypeService=countriesFtypeService;
        this._countriesSFtypeService=countriesSFtypeService;
        this._speciesService=speciesService;

      this.aggregations=[
          {
              "type": "species",
              "title": "By species",
              "parameter": "document.speciesMapping",
              "aggregation": {
                  "name": "species",
                  "values":[]
              }
          },
          {
              "type": "ftypes",
              "title": "By primary farmed type",
              "parameter": "document.ftypeMapping",
              "aggregation": {
                  "name": "ftype",
                  "values": []
              }
          },
          {
              "type": "sftypes",
              "title": "By secondary farmed type",
              "parameter": "document.sftypeMapping",
              "aggregation": {
                  "name": "sftype",
                  "values": []
              }
          },
      ];
  }

    /**
     * fetch the sftypes by ftype and load them 
     *
     */
    fetchSFtypesByFtype(ftype:string) {
        this._countriesSFtypeService.getByFype(ftype).subscribe(
            (data)=>{
                this.aggregations[2].aggregation.values=data;
            },
            (error)=>{
                console.log("Network error: ", error);
            }
        );

    }

    /**
     * fetch the sftype and load them 
     *
     */
    fetchSFtypes() {
        this._countriesSFtypeService.getAll().subscribe(
            (data)=>{
                this.aggregations[2].aggregation.values=data;
            },
            (error)=>{
                console.log("Network error: ", error);
            }
        );

    }

    /**
     * fetch the ftypes by specie and load them 
     *
     */
    fetchFtypesBySpecie(specie:string) {
        this._countriesFtypeService.getBySpecie(specie).subscribe(
            (data)=>{
                this.aggregations[1].aggregation.values=data;
            },
            (error)=>{
                console.log("Network error: ", error);
            }
        );

    }

    /**
     * fetch the ftypes and load them 
     *
     */
    fetchFtypes() {
        this._countriesFtypeService.getAll().subscribe(
            (data)=>{
                this.aggregations[1].aggregation.values=data;
            },
            (error)=>{
                console.log("Network error: ", error);
            }
        );

    }

    /**
     * fetch the species and load them in this._service
     *
     */
    fetchSpecsByName(name) {
        this._speciesService.getByName(name).subscribe(
            (data)=>{
                this.aggregations[0].aggregation.values=data;
            },
            (error)=>{
                console.log("Network error: ", error);
            }
        );

    }

    /**
     * fetch the species and load them in this._service
     *
     */
    fetchSpecs() {
        this._speciesService.getAll().subscribe(
            (data)=>{
                this.aggregations[0].aggregation.values=data;
            },
            (error)=>{
                console.log("Network error: ", error);
            }
        );

    }

    /**
     * remove filters of specific type
     *
     * @param {Filter[]} filters the filters to clear
     * @param {string} type the type
     * @return Filter[] the filters cleared
     */
    clearFiltersByType(filters:Filter[], type:string):Filter[]{
        return filters.filter(e=>(e.key!=type));
    }

    /**
     * filters the aggregations leaving only the selected one for that type
     *
     * @param {string} type the type
     * @param {string} key the key of the aggregation
     * @param {AggregationInput[]} aggregations the aggregation
     * @returns {AggregationInput[]} the new value 
     */
    filterAggregation(type:string, key:string, aggregations:AggregationInput[]):AggregationInput[]{
        return aggregations.map(agg=>{
            if(agg.type!=type) return agg;

            agg.aggregation.values=agg.aggregation.values.filter(e=>(e.key===key));
            return agg;
        });
    }

    /**
     * action on facet click
     *
     * @param {string} type the type
     * @param {string} parameter the parameter
     * @param {string} event the event
     */
    searchAggregation(type: string, parameter: string, event: string) {
        this.filterValues=this.clearFiltersByType(this.filterValues, type)

        this.filterValues=this.addFilter(type,parameter, event,this.filterValues);
        this.search.emit(this.filterValues);
    }


    /**
     * add a Filter to filterValues
     * @param {string} key the key
     * @param {string} parameter the parameter
     * @param {string} value the value
     * @param {Filter[]} filters the filter array of filters
     * @return {Filter[]} the new Filter[], [] otherwise
     **/
    addFilter(key:string, parameter:string, value:string, filters:Filter[]):Filter[]{
        filters.push({ key: key, parameter: parameter, value: value });
        filters=filters.sort((a,b)=>{
            let asort=(a.key==="species")?0:(a.key==="ftypes")?1:2;
            let bsort=(b.key==="species")?0:(b.key==="ftypes")?1:2;

            return asort-bsort;
        });

        return filters;
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

    ngOnChanges() {

        let specie, ftype, sftype;

        
        for (var i = 0, len = this.filterValues.length, e=null; i < len && (e=this.filterValues[i]) ; i++) {
            if (e.key==="species") specie=e;
            else if (e.key==="ftypes") ftype=e;
            else if (e.key==="sftypes") sftype=e;
        }


        if (specie) this.aggregations=this.filterAggregation(specie.key, specie.value, this.aggregations);
        else this.fetchSpecs();

        if (ftype) this.aggregations=this.filterAggregation(ftype.key, ftype.value, this.aggregations);
        else if (specie) this.fetchFtypesBySpecie(specie.name);
        else this.fetchFtypes();

        if (sftype) this.aggregations=this.filterAggregation(sftype.key, sftype.value, this.aggregations);
        else if (ftype) this.fetchSFtypesByFtype(ftype.name);
        else this.fetchSFtypes();

    }


    /**
     * event fired when user type on the filter-term textbox
     *
     * @param {string} type the type
     * @param {string} term what typed
     * @return {void} 
     */
    filterAggregations(type:string, term:string){
        if ((type!=="species") || (term.length<5)) return;

        this.fetchSpecsByName(term);

    }
}
