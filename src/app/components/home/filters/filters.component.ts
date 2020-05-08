import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import {FilterTermsComponent} from '../../../components/search/filter-terms/filter-terms.component';
import { Filter, AggregationInput, ResultComponent, ResultList, ResultSearchEvent, ViewTypeEnum } from '../../../components/search/namespace';
import {TaxonomiesService} from '../../../services/taxonomies.service';
import {SpeciesService} from '../../../services/species.service';
import {FtypesService} from '../../../services/ftypes.service';
import {SFtypesService} from '../../../services/sftypes.service';


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
      private _taxonomiesService:TaxonomiesService
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

/* TODO: (high) add taxonomies dependency to species filter */
/* TODO: (high) add taxonomies dependency to ftype filter */
/* TODO: (high) add taxonomies dependency to sftype filter */

    /**
     * fetch the sftypes by ftype and load them 
     *
     */
    fetchSFtypesByFtype(ftype:string) {
        this._SFtypesService.getByFype(ftype).subscribe(
            (data)=>{
                this.aggregations[this.aggIndexes.ftypes].aggregation.values=data;
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
        this._SFtypesService.getAll().subscribe(
            (data)=>{
                this.aggregations[this.aggIndexes.sftypes].aggregation.values=data;
            },
            (error)=>{
                console.log("Network error: ", error);
            }
        );

    }

    /**
     * fetch the ftypes by specie and load them 
     * @param {string} specie the name of the specie
     *
     */
    fetchFtypesBySpecie(specie:string) {
        this._FtypesService.getBySpecie(specie).subscribe(
            (data)=>{
                this.aggregations[this.aggIndexes.species].aggregation.values=data;
            },
            (error)=>{
                console.log("Network error: ", error);
            }
        );

    }

    /**
     * fetch the ftypes and load them 
     * @param {string} taxonomy (optional) the taxonomy for filtering
     * @param {string} specie (optiona) the specie for filtering
     *
     */
    fetchFtypes(taxonomy:string="", specie:string="") {
        this._FtypesService.getAll(taxonomy, specie).subscribe(
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
     *
     */
    fetchSpecs(name:string="", taxonomy:string="") {
        this._speciesService.getAll(name, taxonomy).subscribe(
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
     *
     */
    fetchTaxonomies() {
        this._taxonomiesService.getAll().subscribe(
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
        /* BUG: select "Acquatic plants" -> "Algae" -> pills are in the wrong order */
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
        /* BUG: select "Acquatic plants" -> "Algae" -> "By species" filter has wrong data */

        let specie, ftype, sftype, taxonomy;

        
        for (var i = 0, len = this.filterValues.length, e=null; i < len && (e=this.filterValues[i]) ; i++) {
            if (e.key==="taxonomies") taxonomy=e;
            else if (e.key==="species") specie=e;
            else if (e.key==="ftypes") ftype=e;
            else if (e.key==="sftypes") sftype=e;
        }


        if (taxonomy) this.aggregations=this.filterAggregation(taxonomy.key, taxonomy.value, this.aggregations);
        else this.fetchTaxonomies();

        if (specie) this.aggregations=this.filterAggregation(specie.key, specie.value, this.aggregations);
        else this.fetchSpecs(
            this.aggregations[this.aggIndexes.species].filter,
            (taxonomy || {}).value
        );

        if (ftype) this.aggregations=this.filterAggregation(ftype.key, ftype.value, this.aggregations);
        // else if (specie) this.fetchFtypesBySpecie(specie.value);
        else this.fetchFtypes(
            (taxonomy || {}).value,
            (specie || {}).value
        );

        // if (sftype) this.aggregations=this.filterAggregation(sftype.key, sftype.value, this.aggregations);
        // else if (ftype) this.fetchSFtypesByFtype(ftype.value);
        // else this.fetchSFtypes();

    }


    /**
     * event fired when user type on the filter-term textbox
     *
     * @param {string} type the type
     * @param {string} term what typed
     * @return {void} 
     */
    filterAggregations(type:string, term:string){
        if ((type!=="species") || ((term.length<3) && (term.length>0))) return;

        this.aggregations[this.aggIndexes.species].filter=term;

        this.fetchSpecs(
            term,
            (this.getFilterValueByKey("taxonomies", this.filterValues) || {value:null}).value
        );

    }
}
