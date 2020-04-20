import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {FilterTermsComponent} from '../../../components/search/filter-terms/filter-terms.component';
import { Filter, AggregationInput, ResultComponent, ResultList, ResultSearchEvent, ViewTypeEnum } from '../../../components/search/namespace';
import {TaxonomiesService} from '../../../services/taxonomies.service';
import {SpeciesService} from '../../../services/species.service';


@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styles: []
})
export class FiltersComponent implements OnInit {
    taxonomiesAggregations: AggregationInput;
    speciesAggregations: AggregationInput;
    private _taxonomies:AggregationInput[];
    private _taxonomiesService;
    private _speciesService;
    filterValues: Filter[];

  @Output() search = new EventEmitter<ResultSearchEvent>();

  constructor(taxonomiesService:TaxonomiesService, speciesService:SpeciesService) {
        this._taxonomiesService=taxonomiesService;
        this._speciesService=speciesService;

        this.fetchTaxonomies();
        this.fetchSpecs();

        this.taxonomiesAggregations = {
            "type": "taxonomies",
            "title": "By taxonomies",
            "parameter": "document.taxonomiesMapping",
            "aggregation": {
                "name": "taxonomies",
                "values": []
            }
        };
        this.speciesAggregations = {
            "type": "species",
            "title": "By species",
            "parameter": "document.speciesMapping",
            "aggregation": {
                "name": "species",
                "values":[]
            }
        };
  }


    /**
     * fetch the taxonomies and load them 
     *
     */
    fetchTaxonomies() {
        this._taxonomiesService.getAll().subscribe(
            (data)=>{
                this.taxonomiesAggregations.aggregation.values=data;
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
                this.speciesAggregations.aggregation.values=data;
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
