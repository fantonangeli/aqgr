import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import {CountryFTypeService} from '../../../services/country-ftype.service';
import {Pie01Component} from '../pie01/pie01.component';

@Component({
  selector: 'app-country-chart01',
  templateUrl: './country-chart01.component.html',
  styleUrls: ['./country-chart01.component.scss']
})
export class CountryChart01Component implements OnInit {
    series=[];
    private _service;


  constructor(sv:CountryFTypeService) {
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