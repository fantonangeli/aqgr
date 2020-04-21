import { Component, OnInit } from '@angular/core';
import {StackedBars01Component} from '../stacked-bars01/stacked-bars01.component';
import {CountriesSpeciesService} from '../../../services/countries-species.service';

@Component({
  selector: 'app-countries-chart03',
  template: ` <app-bars01 [series]="series" *ngIf="series.length" xAxisTitle="Total number of species reported by countries"></app-bars01> `,
  styles: []
})
export class CountriesChart03Component implements OnInit {
    series=[];
    private _service;


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
