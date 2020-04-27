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
    filterValues: Filter[];
    aggregations: AggregationInput[];

  @Output() search = new EventEmitter<ResultSearchEvent>();


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
     * fetch the taxonomies and load them 
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
     * action on facet click
     *
     * @param {string} type the type
     * @param {string} parameter the parameter
     * @param {string} event the event
     */
    searchAggregation(type: string, parameter: string, event: string) {
        this.filterValues=[{ key: type, parameter: parameter, value: event }];
        this.search.emit({ from: 0, query: parameter, filters: this.filterValues });
    }
  ngOnInit() {
  }

}
