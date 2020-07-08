import { Component, OnInit, OnChanges } from '@angular/core';
import { DynamicHTMLModule, DynamicHTMLComponent } from '../../core/components/dynamic-html';
import { Filter, ResultSearchEvent} from '../../components/search/namespace';
import {UtilsService} from '../../services/utils.service';
import {BasePage01Component} from '../base-page01/base-page01.component';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-use',
  templateUrl: './use.component.html',
})
export class UseComponent extends BasePage01Component {
    initialAccordionsIsOpen:boolean=environment.defaultAccordionIsOpenValue;
    isAccordion01open:boolean=true;
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

    constructor(_utilsService:UtilsService){
        super(_utilsService);
    }



}
