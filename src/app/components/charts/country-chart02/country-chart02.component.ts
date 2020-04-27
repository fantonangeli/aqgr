import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import {CountryDevSpeciesService} from '../../../services/country-dev-species.service';
import {StackedBars01Component} from '../stacked-bars01/stacked-bars01.component';

@Component({
  selector: 'app-country-chart02',
  templateUrl: './country-chart02.component.html',
  styleUrls: ['./country-chart02.component.scss']
})
export class CountryChart02Component implements OnInit {
    series=[];
    private _service;

    // TODO: hide if primary ftype selected
    // TODO: the sftype chart must show the data related to the filter

  constructor(sv:CountryDevSpeciesService) {
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
