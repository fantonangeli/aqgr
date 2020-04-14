import { Component, OnInit } from '@angular/core';
import {StackedBars01Component} from '../stacked-bars01/stacked-bars01.component';
import {CountriesFtypeService} from '../../../services/countries-ftype.service';

@Component({
  selector: 'app-countries-chart01',
  template: `
    <app-stacked-bars01 [series]="series" *ngIf="series.length"></app-stacked-bars01>
  `,
  styles: []
})
export class CountriesChart01Component implements OnInit {
    series=[];
    private _service;


  constructor(sv:CountriesFtypeService) {
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
