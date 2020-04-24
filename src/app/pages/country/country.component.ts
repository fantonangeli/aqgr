import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { CountryChart01Component } from '../../components/charts/country-chart01/country-chart01.component';
import { CountryChart02Component } from '../../components/charts/country-chart02/country-chart02.component';
import { CountryChart03Component } from '../../components/charts/country-chart03/country-chart03.component';

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

    // todo: divide the numbers in the json by 1000
    countryName:string="China"

    constructor() { }

    ngOnInit(){
    }

}
