import { Component, OnInit } from '@angular/core';
import {CountrySpeciesService} from '../../../services/country-species.service';
import {Bars01Component} from '../bars01/bars01.component';
import {LoggerService} from '../../../services/logger.service';

@Component({
  selector: 'app-country-chart03',
  templateUrl: './country-chart03.component.html',
  styleUrls: ['./country-chart03.component.scss']
})
export class CountryChart03Component implements OnInit {
    series=[];
    private _service;


  constructor(sv:CountrySpeciesService, private _logger:LoggerService) {
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
                this._logger.error("Network error: ", error);
            }
        );

    }

    ngOnInit(){
    }

}
