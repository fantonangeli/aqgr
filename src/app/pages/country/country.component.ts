import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import * as Highcharts from 'highcharts';
import { CountryChart01Component } from '../../components/charts/country-chart01/country-chart01.component';
import { CountryChart02Component } from '../../components/charts/country-chart02/country-chart02.component';
import {CountryInfoService} from '../../services/country/country-info.service';
import { SpeciesListComponent } from '../../components/country/species-list/species-list.component';
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
                let countryFilter=new Filter();

                this.countryName=data[0].name;

                countryFilter.key="countries";
                countryFilter.value=this.countryName;

                this.filterValues.push(countryFilter);
            },
            (error)=>{
                this._logger.error("Network error: ", error);
            }
        );

    }

    ngOnInit(){
        this.ccode = this.route.snapshot.paramMap.get("ccode");

        this.fetchInfo(this.ccode);
    }

}
