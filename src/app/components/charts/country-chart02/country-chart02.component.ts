import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import {CountrySFTypeService} from '../../../services/country-sftype.service';
import {Pie01Component} from '../pie01/pie01.component';

@Component({
  selector: 'app-country-chart02',
  templateUrl: './country-chart02.component.html',
  styleUrls: ['./country-chart02.component.scss']
})
export class CountryChart02Component implements OnInit {
    series=[];
    private _service;


  constructor(sv:CountrySFTypeService) {
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
