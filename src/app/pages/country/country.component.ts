import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import * as Highcharts from 'highcharts';
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
    isAccordion01open:boolean=false;
    isAccordion02open:boolean=false;
    isAccordion03open:boolean=false;
    isAccordion04open:boolean=false;
    isAccordion05open:boolean=false;
    isAccordion06open:boolean=false;
    isAccordion07open:boolean=false;
    ccode:string;
    filterValues: Filter[]=[];

    countryName:string=""

    constructor(private route: ActivatedRoute, private _countryInfoService:CountryInfoService, private _logger:LoggerService) { }

    /**
     * fetch the data and load them
     * @param {string} ccode country code
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

    /**
     * event fired on taxonomy click inside speciesList
     *
     * @param {string} (optional) taxonomy taxonomy name, not used for now
     */
    public speciesList_onTaxonomyClick(taxonomy?:string){
        this.isAccordion03open=true;
        
        setTimeout(()=>{
            document.querySelector("app-country-table01").scrollIntoView();
        }, 100);
    }

    ngOnInit(){
        this.ccode = this.route.snapshot.paramMap.get("ccode");

        this.fetchInfo(this.ccode);
    }

}
