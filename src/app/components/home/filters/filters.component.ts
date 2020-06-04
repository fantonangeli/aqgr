import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import {FilterTermsComponent} from '../../../components/search/filter-terms/filter-terms.component';
import { Filter, AggregationInput, ResultComponent, ResultList, ResultSearchEvent, ViewTypeEnum } from '../../../components/search/namespace';
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

    /* TODO: filters in fixed position */

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
          {
              "type": "continents",
              "title": "By continents",
              "parameter": "document.continentsMapping",
              "filter": "",
              "aggregation": {
                  "name": "continents",
                  "values":[]
              }
          },
          {
              "type": "regions",
              "title": "By regions",
              "parameter": "document.regionsMapping",
              "filter": "",
              "aggregation": {
                  "name": "regions",
                  "values":[]
              }
          },
          {
              "type": "countries",
              "title": "By countries",
              "parameter": "document.countriesMapping",
              "filter": "",
              "aggregation": {
                  "name": "countries",
                  "values":[]
              }
          },
          {
              "type": "taxonomies",
              "title": "By taxonomies",
              "parameter": "document.taxonomiesMapping",
              "filter": "",
              "aggregation": {
                  "name": "taxonomies",
                  "values":[]
              }
          },
          {
              "type": "species",
              "title": "By species",
              "parameter": "document.speciesMapping",
              "filter": "",
              "aggregation": {
                  "name": "species",
                  "values":[]
              }
          },
          {
              "type": "ftypes",
              "title": "By primary farmed type",
              "parameter": "document.ftypeMapping",
              "filter": "",
              "aggregation": {
                  "name": "ftype",
                  "values": []
              }
          },
          {
              "type": "sftypes",
              "title": "By secondary farmed type",
              "parameter": "document.sftypeMapping",
              "filter": "",
              "aggregation": {
                  "name": "sftype",
                  "values": []
              }
          },
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
                this.aggregations[this.aggIndexes[type]].aggregation.values=data;
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

        //reset the search value
        this.aggregations[this.aggIndexes[type]].filter="";

        //reset the search value for dependent types
        if(type==="continents") this.aggregations[this.aggIndexes["countries"]].filter=""; 
        if(type==="taxonomies") this.aggregations[this.aggIndexes["species"]].filter=""; 

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
        /* BUG: in countries if search "italy", click italy -> i can select Asia in continents and Eastern Asia in regions*/
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
