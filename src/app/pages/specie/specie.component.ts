import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import * as Highcharts from 'highcharts';
import {SpecieInfoService} from '../../services/specie/specie-info.service';
import { SpeciesListComponent } from '../../components/country/species-list/species-list.component';
import { Filter} from '../../components/search/namespace';
import {LoggerService} from '../../services/logger.service';
import { environment } from '../../../environments/environment';
import {BasePage01Component} from '../base-page01/base-page01.component';
import {UtilsService} from '../../services/utils.service';
import { AccordionProps } from '../../namespace';


@Component({
  selector: 'app-specie',
  templateUrl: './specie.component.html',
})
export class SpecieComponent extends BasePage01Component implements OnInit {
    initialAccordionsIsOpen:boolean=environment.defaultAccordionIsOpenValue;
    alphaCode:string;
    filterValues: Filter[]=[];

    specieName:string="";
    lastModifiedDate:string="";
    totalProduction:number;
    defaultDateFormat:string=environment.defaultDateFormat;

    constructor(private route: ActivatedRoute, private _specieInfoService:SpecieInfoService, private _logger:LoggerService, _utilsService:UtilsService) {
        super(_utilsService);
        this.accordionsProps=Array(9).fill(null).map(e=>(new AccordionProps()));
    }

    /**
     * fetch the data and load them
     * @param {string} alphaCode alpha code
     *
     */
    fetchInfo(alphaCode:string) {
        this._specieInfoService.getData(this.alphaCode).subscribe(
            (data)=>{
                let filter=new Filter();

                this.specieName=data[0].scientificName;
                this.totalProduction=data[0].timeseries[environment.lastTimeseriesYear];
                this.lastModifiedDate=data[0].lastModifiedDate;

                filter.key="species";
                filter.value=this.specieName;

                this.filterValues.push(filter);
            },
            (error)=>{
                this._logger.error("Network error: ", error);
            }
        );

    }

    ngOnInit(){
        this.alphaCode = this.route.snapshot.paramMap.get("alphaCode");

        this.fetchInfo(this.alphaCode);
    }

}
