import { Component, OnInit } from '@angular/core';
import {StackedBars01Component} from '../stacked-bars01/stacked-bars01.component';
import {CountriesSpeciesService} from '../../../services/countries-species.service';

@Component({
  selector: 'app-countries-chart03',
  template: `
    <app-stacked-bars01 [series]="series" *ngIf="series.length"></app-stacked-bars01>
  `,
  styles: []
})
export class CountriesChart03Component implements OnInit {
    series=[];
    private _service;

    // TODO: the bars divided into different farmed types, that graph was for page 2. This one should just show the number of species. 

  constructor(sv:CountriesSpeciesService) {
        this._service=sv;

        this.fetchData();
  }


    /**
     * fetch the data and load them
     *
     */
    fetchData() {
        this._service.getAll().subscribe(
            (data)=>{
                this.series=data;
            },
            (error)=>{
                console.log("Network error: ", error);
            }
        );

    }

    ngOnInit(){
    }

}
