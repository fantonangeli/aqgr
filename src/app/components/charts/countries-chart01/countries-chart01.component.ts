import { Component, OnInit } from '@angular/core';
import {CountriesFtypeService} from '../../../services/countries-ftype.service';
import {Pie01Component} from '../pie01/pie01.component';

@Component({
  selector: 'app-countries-chart01',
  template: `
    <app-pie01 [series]="series" [legendEnabled]="false" [enableDataLabels]="true" *ngIf="series.length"></app-pie01>
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
