import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import * as Highcharts from 'highcharts';
import { CountryChart01Component } from '../../components/charts/country-chart01/country-chart01.component';
import { CountryChart02Component } from '../../components/charts/country-chart02/country-chart02.component';
import { CountryChart03Component } from '../../components/charts/country-chart03/country-chart03.component';
import {CountryInfoService} from '../../services/country-info.service';
import { Filter} from '../../components/search/namespace';
import {LoggerService} from '../../services/logger.service';


@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {
    ccode:string;
    filterValues: Filter[]=[];

    countryName:string=""

    constructor(private route: ActivatedRoute, private _countryInfoService:CountryInfoService, private _logger:LoggerService) { }

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
                this._logger.error("Network error: ", error);
            }
        );

    }

    ngOnInit(){
        let countryFilter=new Filter();
        this.ccode = this.route.snapshot.paramMap.get("ccode");

        countryFilter.key="countries";
        countryFilter.id=this.ccode;

        this.filterValues.push(countryFilter);

        this.fetchInfo(this.ccode);
    }

}
