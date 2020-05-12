import { Component, OnChanges, Input } from '@angular/core';
import {StackedBars01Component} from '../stacked-bars01/stacked-bars01.component';
import { Filter} from '../../../components/search/namespace';
import {SpeciesService} from '../../../services/species.service';

@Component({
  selector: 'app-countries-chart03',
    // todo: Title: Total number of countries reported on this specie
  template: ` <app-bars01 [series]="series" *ngIf="series.length" xAxisTitle="Total number of species reported by countries"></app-bars01> `,
  styles: []
})
export class CountriesChart03Component implements OnChanges {
    series=[];
    @Input() selectedTaxonomy:Filter;


  constructor(private _service:SpeciesService) {
  }


    /**
     * initialize the data
     *
     * @param {any[]} data=[] the data from the service
     * @returns {object[]} the series in highchart format
     */
    initData(data:any[]=[]):object[]{
        let r=[{
            "name":"Specie",
            "data": [
            ]
        }];

        r[0].data=data.map(e=>({"name": e.key, "y":e.value}));

        return r;
    }

    /**
     * fetch the data and load them
     *
     */
    fetchData(taxonomy:string="") {
        /* TODO: connect to the species service */
        this._service.getAll("", taxonomy).subscribe(
            (data)=>{
                this.series=this.initData(data);
            },
            (error)=>{
                console.log("Network error: ", error);
            }
        );

    }

    ngOnChanges(){
        this.fetchData(
            (this.selectedTaxonomy)?this.selectedTaxonomy.value:""
        );
    }

}
