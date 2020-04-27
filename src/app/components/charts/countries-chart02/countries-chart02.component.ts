import { Component, OnInit } from '@angular/core';
import {CountriesSFTypeService} from '../../../services/countries-sftype.service';
import {Pie01Component} from '../pie01/pie01.component';

@Component({
  selector: 'app-countries-chart02',
  template: `
    <app-pie01 [series]="series" [legendEnabled]="false" [enableDataLabels]="true" *ngIf="series.length" [height]="200"></app-pie01>
  `,
  styles: []
})
export class CountriesChart02Component implements OnInit {
    series=[];
    private _service;


  constructor(sv:CountriesSFTypeService) {
        this._service=sv;

        this.fetchData();
  }

    /**
     * initialize the data
     *
     * @param {any[]} data=[] the data from the service
     * @returns {object[]} the series in highchart format
     */
    initData(data:any[]=[]):object[]{
        let r=[{
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
    fetchData() {
        this._service.getAll().subscribe(
            (data)=>{
                this.series=this.initData(data);
            },
            (error)=>{
                console.log("Network error: ", error);
            }
        );

    }

    ngOnInit(){
    }

}
