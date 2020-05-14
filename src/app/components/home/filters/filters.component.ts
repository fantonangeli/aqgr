import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import {FilterTermsComponent} from '../../../components/search/filter-terms/filter-terms.component';
import { Filter, AggregationInput, ResultComponent, ResultList, ResultSearchEvent, ViewTypeEnum } from '../../../components/search/namespace';
import {TaxonomiesService} from '../../../services/taxonomies.service';
import {SpeciesService} from '../../../services/species.service';
import {FtypesService} from '../../../services/ftypes.service';
import {SFtypesService} from '../../../services/sftypes.service';
import {SearchServiceParams} from '../../../namespace';
import {UtilsService} from '../../../services/utils.service';


@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styles: []
})
export class FiltersComponent implements OnChanges {
    @Input() filterValues: Filter[];
    aggregations: AggregationInput[];

    private aggIndexes={
        taxonomies:0,
        species:1,
        ftypes:2,
        sftypes:3
    };

  @Output() search = new EventEmitter<Filter[]>();


  constructor(
      private _FtypesService:FtypesService,
      private _speciesService:SpeciesService, 
      private _SFtypesService:SFtypesService, 
      private _taxonomiesService:TaxonomiesService,
      private _utilsService:UtilsService
  ) {

      this.aggregations=[
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
        this._SFtypesService.getAll(params).subscribe(
            (data)=>{
                this.aggregations[this.aggIndexes.sftypes].aggregation.values=data;
            },
            (error)=>{
                console.log("Network error: ", error);
            }
        );

    }


    /**
     * fetch the ftypes and load them 
     * @param {SearchServiceParams} params the params to send to the service
     *
     */
    fetchFtypes(params:SearchServiceParams=new SearchServiceParams()) {
        this._FtypesService.getAll(params).subscribe(
            (data)=>{
                this.aggregations[this.aggIndexes.ftypes].aggregation.values=data;
            },
            (error)=>{
                console.log("Network error: ", error);
            }
        );

    }

    /**
     * fetch the species and load them in this._service
     * @param {SearchServiceParams} params the params to send to the service
     *
     */
    fetchSpecs(params:SearchServiceParams=new SearchServiceParams()) {
        if(!params.name && !params.taxonomy) {
            this.aggregations[this.aggIndexes.species].aggregation.values=[];
            return;
        }

        this._speciesService.getAll(params).subscribe(
            (data)=>{
                this.aggregations[this.aggIndexes.species].aggregation.values=data;
            },
            (error)=>{
                console.log("Network error: ", error);
            }
        );

    }

    /**
     * fetch the species and load them in this._service
     * @param {SearchServiceParams} params the params to send to the service
     *
     */
    fetchTaxonomies(params:SearchServiceParams=new SearchServiceParams()) {

        this._taxonomiesService.getAll(params).subscribe(
            (data)=>{
                this.aggregations[this.aggIndexes.taxonomies].aggregation.values=data;
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

        //reset the search value
        this.aggregations[this.aggIndexes[type]].filter="",

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


        params=this._utilsService.getSearchServiceParamsFromFilterValues(this.filterValues);


        if (params.taxonomy) this.aggregations=this.filterAggregation("taxonomies", params.taxonomy, this.aggregations);
        else this.fetchTaxonomies(
            params
        );

        if (params.specie) this.aggregations=this.filterAggregation("species", params.specie, this.aggregations);
        else {
            this.fetchSpecs(
                { ...params, name:this.aggregations[this.aggIndexes.species].filter }
            );
        }

        if (params.ftype) this.aggregations=this.filterAggregation("ftypes", params.ftype, this.aggregations);
        else this.fetchFtypes(
            params
        );

        if (params.sftype) this.aggregations=this.filterAggregation("sftypes", params.sftype, this.aggregations);
        else this.fetchSFtypes(
            params
        );

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

        if ((type!=="species") || ((term.length<3) && (term.length>0))) return;

        this.aggregations[this.aggIndexes.species].filter=term;
        params.name=term;
        params.ccode=(this._utilsService.getFilterValueByKey("country", this.filterValues) || {value:""}).value;
        params.taxonomy=(this._utilsService.getFilterValueByKey("taxonomies", this.filterValues) || {value:""}).value;

        this.fetchSpecs(
            params
        );

    }
}
