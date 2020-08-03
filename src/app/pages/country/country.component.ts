import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import * as Highcharts from 'highcharts';
import {CountryInfoService} from '../../services/country/country-info.service';
import { SpeciesListComponent } from '../../components/country/species-list/species-list.component';
import { Filter} from '../../components/search/namespace';
import { LoggerService } from 'aqgr-lib';
import { environment } from '../../../environments/environment';
import {BasePage01Component} from '../base-page01/base-page01.component';
import {UtilsService} from '../../services/utils.service';
import { AccordionProps } from '../../namespace';


@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
})
export class CountryComponent extends BasePage01Component implements OnInit {
    iso3:string;
    filterValues: Filter[]=[];
    countryName:string="";
    lastModifiedDate:string="";
    defaultDateFormat:string=environment.defaultDateFormat;

    constructor(private route: ActivatedRoute, private _countryInfoService:CountryInfoService, private _logger:LoggerService, _utilsService:UtilsService) {
        super(_utilsService);

        this.accordionsProps=Array(16).fill(null).map(e=>(new AccordionProps()));
    }

    /**
     * fetch the data and load them
     * @param {string} iso3 country code
     *
     */
    fetchInfo(iso3:string) {
        this._countryInfoService.getData(this.iso3).subscribe(
            (data)=>{
                let filter=new Filter();

                this.countryName=data[0].nameEn;
                this.lastModifiedDate=data[0].lastModifiedDate;

                filter.key="countries";
                filter.value=this.countryName;

                this.filterValues.push(filter);
            },
            (error)=>{
                this._logger.error("Network error: ", error);
            }
        );

    }

    /**
     * event fired on taxonomy click inside speciesList
     *
     * @param {string} (optional) taxonomy taxonomy name, not used for now
     */
    public speciesList_onTaxonomyClick(taxonomy?:string){
        this.accordionsProps[15].isOpen=true;
        
        setTimeout(()=>{
            document.querySelector("app-country-table01").scrollIntoView();
        }, 100);
    }

    ngOnInit(){
        this.iso3 = this.route.snapshot.paramMap.get("iso3");

        this.fetchInfo(this.iso3);
    }

}
