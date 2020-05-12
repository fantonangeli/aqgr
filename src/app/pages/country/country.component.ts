import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import * as Highcharts from 'highcharts';
import { CountryChart01Component } from '../../components/charts/country-chart01/country-chart01.component';
import { CountryChart02Component } from '../../components/charts/country-chart02/country-chart02.component';
import { CountryChart03Component } from '../../components/charts/country-chart03/country-chart03.component';
import {CountryInfoService} from '../../services/country-info.service';

declare var require: any;
let Boost = require('highcharts/modules/boost');
let noData = require('highcharts/modules/no-data-to-display');
let More = require('highcharts/highcharts-more');

Boost(Highcharts);
noData(Highcharts);
More(Highcharts);
noData(Highcharts);

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {
    ccode:string;

    countryName:string=""

    constructor(private route: ActivatedRoute, private _countryInfoService:CountryInfoService) { }

    /**
     * fetch the data and load them
     * @param {string} ccode
     *
     */
    fetchInfo(ccode:string) {
        this._countryInfoService.getData(this.ccode).subscribe(
            (data)=>{
                this.countryName=data.CountryName;
            },
            (error)=>{
                console.log("Network error: ", error);
            }
        );

    }

    ngOnInit(){
        this.ccode = this.route.snapshot.paramMap.get("ccode");
        this.fetchInfo(this.ccode);
    }

}
