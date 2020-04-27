import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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
export class FiltersComponent implements OnInit {
    private _countriesFtypeService;
    private _countriesSFtypeService;
    private _speciesService;
    filterValues: Filter[]=[];
    aggregations: AggregationInput[];

  @Output() search = new EventEmitter<Filter[]>();


  constructor(countriesFtypeService:CountriesFtypeService, speciesService:SpeciesService, countriesSFtypeService:CountriesSFtypeService) {
        this._countriesFtypeService=countriesFtypeService;
        this._countriesSFtypeService=countriesSFtypeService;
        this._speciesService=speciesService;

        this.fetchFtypes();
        this.fetchSFtypes();
        this.fetchSpecs();

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
        this.aggregations=this.filterAggregation(type, event, this.aggregations);
        this.filterValues=this.clearFiltersByType(this.filterValues, type)

        if(type==="species") this.fetchFtypesBySpecie(event);
        else if(type==="ftypes") this.fetchSFtypesByFtype(event);

        this.filterValues.push({ key: type, parameter: parameter, value: event });
        this.search.emit(this.filterValues);
    }

  ngOnInit() {
  }

}
