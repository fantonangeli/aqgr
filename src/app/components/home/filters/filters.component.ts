import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {FilterTermsComponent} from '../../../components/search/filter-terms/filter-terms.component';
import { Filter, AggregationInput, ResultComponent, ResultList, ResultSearchEvent, ViewTypeEnum } from '../../../components/search/namespace';
import {TaxonomiesService} from '../../../services/taxonomies.service';


@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styles: []
})
export class FiltersComponent implements OnInit {
    aggregations: AggregationInput[];
    private _taxonomies:AggregationInput[];
    private _taxonomiesService;
    filterValues: Filter[];

  @Output() search = new EventEmitter<ResultSearchEvent>();

  constructor(taxonomiesService:TaxonomiesService) {
        this._taxonomiesService=taxonomiesService;

        this.fetchTaxonomies();

        this.aggregations = [{
            "type": "taxonomies",
            "title": "By taxonomies",
            "parameter": "document.taxonomiesMapping",
            "aggregation": {
                "name": "taxonomies",
                "values": []
            }
        }, {
            "type": "species",
            "title": "By species",
            "parameter": "document.speciesMapping",
            "aggregation": {
                "name": "species",
                "values":[]
            }
        }];
  }


    /**
     * fetch the taxonomies and load them 
     *
     */
    fetchTaxonomies() {
        this._taxonomiesService.getAll().subscribe(
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
    // fetchSpecs() {
    //     this._taxonomiesService.getAll().subscribe(
    //         (data)=>{
    //             this.=data;
    //         },
    //         (error)=>{
    //             console.log("Network error: ", error);
    //         }
    //     );
    //
    // }

    /**
     * action on facet click
     *
     * @param {string} type the type
     * @param {string} parameter the parameter
     * @param {string} event the event
     */
    searchAggregation(type: string, parameter: string, event: string) {
        this.filterValues=[{ key: type, parameter: parameter, value: event }];
        debugger;
        this.search.emit({ from: 0, query: parameter, filters: this.filterValues });
    }
  ngOnInit() {
  }

}
