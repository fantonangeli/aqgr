import { Component, OnInit } from '@angular/core';
import { DynamicHTMLModule, DynamicHTMLComponent } from '../../core/components/dynamic-html';
import { Filter, ResultSearchEvent} from '../../components/search/namespace';
import {UtilsService} from '../../services/utils.service';
import {BasePage01Component} from '../base-page01/base-page01.component';
import { environment } from '../../../environments/environment';
import { AccordionProps } from '../../namespace';

@Component({
  selector: 'app-policies',
  templateUrl: './policies.component.html',
  styleUrls: ['./policies.component.scss']
})
export class PoliciesComponent extends BasePage01Component  {
    countryName:string;

    constructor(_utilsService:UtilsService){
        super(_utilsService);

        this.accordionsProps=Array(13).fill(null).map(e=>(new AccordionProps()));
        this.accordionsProps[0].isOpen=true;
    }

    onFilterValuesChange(){
                this.accordionsProps[0].isVisible=(!this.selectedContinent && !this.selectedRegion && !this.selectedCountry);
                this.accordionsProps[1].isVisible=(!this.selectedSpecie);
    }
}
