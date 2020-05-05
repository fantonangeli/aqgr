import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import {CountryFTypeService} from '../../../services/country-ftype.service';
import {StackedBars01Component} from '../stacked-bars01/stacked-bars01.component';

@Component({
  selector: 'app-country-chart01',
  templateUrl: './country-chart01.component.html',
  styleUrls: ['./country-chart01.component.scss']
})
export class CountryChart01Component implements OnInit {
    series=[];
    private _service;
    @Input() ccode:string;



  constructor(sv:CountryFTypeService) {
        this._service=sv;
  }


    /**
     * fetch the data and load them
     *
     */
    fetchData() {
        this._service.getAll(this.ccode).subscribe(
            (data)=>{
                this.series=data;
            },
            (error)=>{
                console.log("Network error: ", error);
            }
        );

    }

    ngOnInit(){
        this.fetchData();
    }

}
