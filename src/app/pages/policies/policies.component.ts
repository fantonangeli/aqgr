import { Component, OnInit } from '@angular/core';
import { DynamicHTMLModule, DynamicHTMLComponent } from '../../core/components/dynamic-html';
import { Filter, ResultSearchEvent} from '../../components/search/namespace';
import {UtilsService} from '../../services/utils.service';
import {BasePage01Component} from '../base-page01/base-page01.component';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-policies',
  templateUrl: './policies.component.html',
  styleUrls: ['./policies.component.scss']
})
export class PoliciesComponent extends BasePage01Component  {
    countryName:string;
    initialAccordionsIsOpen:boolean=!environment.production;
    isAccordion01open:boolean=this.initialAccordionsIsOpen;
    isAccordion02open:boolean=this.initialAccordionsIsOpen;
    isAccordion03open:boolean=this.initialAccordionsIsOpen;
    isAccordion04open:boolean=this.initialAccordionsIsOpen;
    isAccordion05open:boolean=this.initialAccordionsIsOpen;
    isAccordion06open:boolean=this.initialAccordionsIsOpen;

    constructor(_utilsService:UtilsService){
        super(_utilsService);
    }

}
