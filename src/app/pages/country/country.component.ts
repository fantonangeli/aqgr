import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import * as Highcharts from 'highcharts';
import {CountryInfoService} from '../../services/country/country-info.service';
import { SpeciesListComponent } from '../../components/country/species-list/species-list.component';
import { Filter} from '../../components/search/namespace';
import {LoggerService} from '../../services/logger.service';
import { environment } from '../../../environments/environment';


@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {
    initialAccordionsIsOpen:boolean=environment.defaultAccordionIsOpenValue;
    isAccordion01open:boolean=this.initialAccordionsIsOpen;
    isAccordion02open:boolean=this.initialAccordionsIsOpen;
    isAccordion03open:boolean=this.initialAccordionsIsOpen;
    isAccordion04open:boolean=this.initialAccordionsIsOpen;
    isAccordion05open:boolean=this.initialAccordionsIsOpen;
    isAccordion06open:boolean=this.initialAccordionsIsOpen;
    isAccordion07open:boolean=this.initialAccordionsIsOpen;
    isAccordion08open:boolean=this.initialAccordionsIsOpen;
    isAccordion09open:boolean=this.initialAccordionsIsOpen;
    isAccordion10open:boolean=this.initialAccordionsIsOpen;
    isAccordion11open:boolean=this.initialAccordionsIsOpen;
    isAccordion12open:boolean=this.initialAccordionsIsOpen;
    isAccordion13open:boolean=this.initialAccordionsIsOpen;
    isAccordion14open:boolean=this.initialAccordionsIsOpen;
    isAccordion15open:boolean=this.initialAccordionsIsOpen;
    isAccordion16open:boolean=this.initialAccordionsIsOpen;
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
