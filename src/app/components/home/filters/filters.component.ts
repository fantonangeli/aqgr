import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import {FilterTermsComponent} from '../../../components/search/filter-terms/filter-terms.component';
import { Filter, AggregationInput, AggregationItem, Aggregation, ResultComponent, ResultList, ResultSearchEvent, ViewTypeEnum } from '../../../components/search/namespace';
import {CountriesService} from '../../../services/countries.service';
import {ContinentsService} from '../../../services/continents.service';
import {RegionsService} from '../../../services/regions.service';
import {TaxonomiesService} from '../../../services/taxonomies.service';
import {SpeciesService} from '../../../services/species.service';
import {FtypesService} from '../../../services/ftypes.service';
import {SFtypesService} from '../../../services/sftypes.service';
import {SearchServiceParams} from '../../../namespace';
import {UtilsService} from '../../../services/utils.service';
import {LoggerService} from '../../../services/logger.service';


@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styles: []
})
export class FiltersComponent implements OnChanges {
    @Input() filterValues: Filter[];
    aggregations: AggregationInput[];


     /**
      * What you want to see (lowercase). Eg. ["taxonomies", "ftypes",]
      * @type {string[]}
      */
    @Input() aggregationsTypes:string[]=[];

    private aggIndexes={
        continents:0,
        regions:1,
        countries:2,
        taxonomies:3,
        species:4,
        ftypes:5,
        sftypes:6
    };

    /* TODO: show the regions only when a continent is selected */

  @Output() search = new EventEmitter<Filter[]>();


  constructor(
      private _FtypesService:FtypesService,
      private _speciesService:SpeciesService, 
      private _SFtypesService:SFtypesService, 
      private _continentsService:ContinentsService,
      private _countriesService:CountriesService,
      private _regionsService:RegionsService,
      private _taxonomiesService:TaxonomiesService,
      private _utilsService:UtilsService, 
      private _logger:LoggerService

  ) {

      this.aggregations=[
          new AggregationInput("continents","By continents"),
          new AggregationInput( "regions", "By regions", "continents"),
          new AggregationInput( "countries", "By countries", "regions"),
          new AggregationInput( "taxonomies", "By taxonomies"),
          new AggregationInput( "species", "By species", "taxonomies"),
          new AggregationInput( "ftypes", "By primary farmed type"),
          new AggregationInput( "sftypes", "By secondary farmed type"),
      ];


  }


    /**
     * fetch a type of element and load them 
     * @param {SearchServiceParams} params the params to send to the service
     *
     */
    public fetchData(type:string, service, params:SearchServiceParams=new SearchServiceParams()) {
        service.getAll(params).subscribe(
            (data)=>{
                this.aggregations[this.aggIndexes[type]].aggregation.values=data.map(e=>({"key":e.key, "value":null}));
            },
            (error)=>{
                this._logger.error("Network error: ", error);
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
    public clearFiltersByType(filters:Filter[], type:string):Filter[]{
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
    public filterAggregation(type:string, key:string, aggregations:AggregationInput[]):AggregationInput[]{
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
     * @param {Aggregation} event the event
     */
    public searchAggregation(agg:AggregationInput, event: AggregationItem) {
        this.filterValues=this.clearFiltersByType(this.filterValues, agg.type)

        this.filterValues=this.addFilter(agg, event,this.filterValues);

        //unselect children recursively
        this.filterValues=this.unselectChildren(agg.type, this.filterValues);

        //reset the search value
        agg.filter="";
        
        this.search.emit(this.filterValues);
    }

    /**
     * deselect the children of a type
     *
     * @param {string} type the aggregation type
     * @param {Filter[]} filters the filter array of filters
     * @return {Filter[]} the new Filter[], [] otherwise
     */
    public unselectChildren(type:string, filters:Filter[]):Filter[]{
        let childAggregation:AggregationInput;

        //get the child aggregation
        childAggregation=this.aggregations.filter(e=>(e.parent===type))[0];

        if(!childAggregation) return filters;

        //remove the child from filters
        filters=this.clearFiltersByType(filters, childAggregation.type);

        //reset the search value for dependent types
        childAggregation.filter="";

        //recursively remove 
        return this.unselectChildren(childAggregation.type, filters);

    }


    /**
     * add a Filter to filterValues
     * @param {AggregationInput} agg the current AggregationInput
     * @param {AggregationItem} selectedAI the selected AggregationItem
     * @param {Filter[]} filters the filter array of filters
     * @return {Filter[]} the new Filter[], [] otherwise
     **/
    public addFilter(agg:AggregationInput, selectedAI:AggregationItem, filters:Filter[]):Filter[]{
        filters.push({ key: agg.type, parameter: agg.parameter, value: selectedAI.key });
        filters=filters.sort((a,b)=>{
            return this.aggIndexes[a.key]-this.aggIndexes[b.key];
        });

        return filters;
    }


    /**
     * render a filter
     *
     * @param {string} type the type of the filter eg.(countries, species)
     * @param {string} paramType the param type as in SearchServiceParams
     * @param {SearchServiceParams} params the params
     * @param {object} service the service for the data
     * @param {string} depParamType (optional) the dependency param type as in SearchServiceParams. If the dependency is not selected no elements will be shown
     */
    public filterRender(type:string, paramType:string, params:SearchServiceParams, service, depParamType:string=""){
        let name=this.aggregations[this.aggIndexes[type]].filter;

        if (~this.aggregationsTypes.indexOf(type)) {
            if (params[paramType]) this.aggregations=this.filterAggregation(type, params[paramType], this.aggregations);
            else if(depParamType && !name && !params[depParamType]) this.aggregations[this.aggIndexes[type]].aggregation.values=[];
            else this.fetchData( type, service, <SearchServiceParams>{ ...params, name });
        }

    }


    ngOnChanges() {
        let params:SearchServiceParams=new SearchServiceParams(), type:string, name:string;


        if (!this.aggregationsTypes.length) this._logger.error("this.aggregationsTypes not valid!");

        params=this._utilsService.getSearchServiceParamsFromFilterValues(this.filterValues);


        this.filterRender("continents", "continent", params, this._continentsService);

        this.filterRender("regions", "region", params, this._regionsService, "continent");

        this.filterRender("countries", "country", params, this._countriesService, "region");

        this.filterRender("taxonomies", "taxonomy", params, this._taxonomiesService);

        this.filterRender("species", "specie", params, this._speciesService, "taxonomy");

        this.filterRender("ftypes", "ftype", params, this._FtypesService);

        this.filterRender("sftypes", "sftype", params, this._SFtypesService);

    }


    getFilterValueByKey=this._utilsService.getFilterValueByKey;


    /**
     * event fired when user type on the filter-term textbox
     *
     * @param {string} type the type
     * @param {string} term what typed
     * @return {void} 
     */
    filterAggregations(type:string, term:string){
        let params=new SearchServiceParams();

        if ((term.length<3) && (term.length>0)) return;

        if (type==="species") {
            this.aggregations[this.aggIndexes.species].filter=term;
            params.name=term;
            params.continent=(this._utilsService.getFilterValueByKey("continents", this.filterValues) || {value:""}).value;
            params.country=(this._utilsService.getFilterValueByKey("countries", this.filterValues) || {value:""}).value;
            params.region=(this._utilsService.getFilterValueByKey("regions", this.filterValues) || {value:""}).value;
            params.taxonomy=(this._utilsService.getFilterValueByKey("taxonomies", this.filterValues) || {value:""}).value;

            this.fetchData("species", this._speciesService, params);
        } else if (type==="countries") {
            this.aggregations[this.aggIndexes.countries].filter=term;
            params.name=term;
            params.continent=(this._utilsService.getFilterValueByKey("continents", this.filterValues) || {value:""}).value;
            params.region=(this._utilsService.getFilterValueByKey("regions", this.filterValues) || {value:""}).value;

            this.fetchData("countries", this._countriesService, params);
        }

    }
}
