import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import {FilterTermsComponent} from '../../../components/search/filter-terms/filter-terms.component';
import { Filter, AggregationInput, ResultComponent, ResultList, ResultSearchEvent, ViewTypeEnum } from '../../../components/search/namespace';
import {CountriesService} from '../../../services/countries.service';
import {ContinentsService} from '../../../services/continents.service';
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
        countries:1,
        taxonomies:2,
        species:3,
        ftypes:4,
        sftypes:5
    };

  @Output() search = new EventEmitter<Filter[]>();


  constructor(
      private _FtypesService:FtypesService,
      private _speciesService:SpeciesService, 
      private _SFtypesService:SFtypesService, 
      private _continentsService:ContinentsService,
      private _countriesService:CountriesService,
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
     * fetch the sftype and load them 
     * @param {SearchServiceParams} params the params to send to the service
     *
     */
    fetchSFtypes(params:SearchServiceParams=new SearchServiceParams()) {
        let {name, continent, country, taxonomy, specie, ftype, sftype} = params;

        this._SFtypesService.getAll(<SearchServiceParams>{continent, country, taxonomy, specie, ftype}).subscribe(
            (data)=>{
                this.aggregations[this.aggIndexes.sftypes].aggregation.values=data;
            },
            (error)=>{
                this._logger.error("Network error: ", error);
            }
        );

    }


    /**
     * fetch the ftypes and load them 
     * @param {SearchServiceParams} params the params to send to the service
     *
     */
    fetchFtypes(params:SearchServiceParams=new SearchServiceParams()) {
        let {name, continent, country, taxonomy, specie, ftype, sftype} = params;

        this._FtypesService.getAll(<SearchServiceParams>{continent, country, taxonomy, specie}).subscribe(
            (data)=>{
                this.aggregations[this.aggIndexes.ftypes].aggregation.values=data;
            },
            (error)=>{
                this._logger.error("Network error: ", error);
            }
        );

    }

    /**
     * fetch the species and load them in this._service
     * @param {SearchServiceParams} params the params to send to the service
     *
     */
    fetchSpecs(params:SearchServiceParams=new SearchServiceParams()) {
        let {name, continent, country, taxonomy, specie, ftype, sftype} = params;

        if(!params.name && !params.taxonomy) {
            this.aggregations[this.aggIndexes.species].aggregation.values=[];
            return;
        }

        this._speciesService.getAll(<SearchServiceParams>{continent, country, taxonomy, name}).subscribe(
            (data)=>{
                this.aggregations[this.aggIndexes.species].aggregation.values=data;
            },
            (error)=>{
                this._logger.error("Network error: ", error);
            }
        );

    }

    /**
     * fetch the taxonomies and load them in this._service
     * @param {SearchServiceParams} params the params to send to the service
     *
     */
    fetchTaxonomies(params:SearchServiceParams=new SearchServiceParams()) {
        let {name, continent, country, taxonomy, specie, ftype, sftype} = params;

        this._taxonomiesService.getAll(<SearchServiceParams>{continent, country}).subscribe(
            (data)=>{
                this.aggregations[this.aggIndexes.taxonomies].aggregation.values=data;
            },
            (error)=>{
                this._logger.error("Network error: ", error);
            }
        );

    }

    /**
     * fetch the countries and load them in this._service
     * @param {SearchServiceParams} params the params to send to the service
     *
     */
    fetchCountries(params:SearchServiceParams=new SearchServiceParams()) {
        let {name, continent, country, taxonomy, specie, ftype, sftype} = params;

        if(!params.name && !params.continent) {
            this.aggregations[this.aggIndexes.species].aggregation.values=[];
            return;
        }

        this._countriesService.getAll(<SearchServiceParams>{continent, name}).subscribe(
            (data)=>{
                this.aggregations[this.aggIndexes.countries].aggregation.values=data;
            },
            (error)=>{
                this._logger.error("Network error: ", error);
            }
        );

    }

    /**
     * fetch the continents and load them in this._service
     * @param {SearchServiceParams} params the params to send to the service
     *
     */
    fetchContinents(params:SearchServiceParams=new SearchServiceParams()) {
        let {name, continent, taxonomy, specie, ftype, sftype} = params;

        this._continentsService.getAll(<SearchServiceParams>{name}).subscribe(
            (data)=>{
                this.aggregations[this.aggIndexes.continents].aggregation.values=data;
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


            let asort=(a.key==="species")?0:(a.key==="ftypes")?1:2;
            let bsort=(b.key==="species")?0:(b.key==="ftypes")?1:2;

            return asort-bsort;
        });

        return filters;
    }



    ngOnChanges() {
        let params=new SearchServiceParams();


        if (!this.aggregationsTypes.length) this._logger.error("this.aggregationsTypes not valid!");

        params=this._utilsService.getSearchServiceParamsFromFilterValues(this.filterValues);

        if (~this.aggregationsTypes.indexOf("continents")) {
            if (params.continent) this.aggregations=this.filterAggregation("continents", params.continent, this.aggregations);
            else this.fetchContinents( params);
        }

        if (~this.aggregationsTypes.indexOf("countries")) {
            if (params.country) this.aggregations=this.filterAggregation("countries", params.country, this.aggregations);
            else this.fetchCountries( params);
        }

        if (~this.aggregationsTypes.indexOf("taxonomies")) {
            if (params.taxonomy) this.aggregations=this.filterAggregation("taxonomies", params.taxonomy, this.aggregations);
            else this.fetchTaxonomies(
                params
            );
        }

        if (~this.aggregationsTypes.indexOf("species")) {
            if (params.specie) this.aggregations=this.filterAggregation("species", params.specie, this.aggregations);
            else {
                this.fetchSpecs(
                    { ...params, name:this.aggregations[this.aggIndexes.species].filter }
                );
            }
        }

        if (~this.aggregationsTypes.indexOf("ftypes")) {
            if (params.ftype) this.aggregations=this.filterAggregation("ftypes", params.ftype, this.aggregations);
            else this.fetchFtypes(
                params
            );
        }

        if (~this.aggregationsTypes.indexOf("sftypes")) {
            if (params.sftype) this.aggregations=this.filterAggregation("sftypes", params.sftype, this.aggregations);
            else this.fetchSFtypes(
                params
            );
        }

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
            params.taxonomy=(this._utilsService.getFilterValueByKey("taxonomies", this.filterValues) || {value:""}).value;

            this.fetchSpecs(
                params
            );
        } else if (type==="countries") {
            this.aggregations[this.aggIndexes.countries].filter=term;
            params.name=term;
            params.continent=(this._utilsService.getFilterValueByKey("continents", this.filterValues) || {value:""}).value;

            this.fetchCountries(
                params
            );
        }

    }
}
