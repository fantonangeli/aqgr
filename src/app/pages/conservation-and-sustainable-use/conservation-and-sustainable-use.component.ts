import { Component, OnInit } from '@angular/core';
import { DynamicHTMLModule, DynamicHTMLComponent } from '../../core/components/dynamic-html';
import { Filter, ResultSearchEvent} from '../../components/search/namespace';
import {UtilsService} from '../../services/utils.service';
import {BasePage01Component} from '../base-page01/base-page01.component';

@Component({
  selector: 'app-conservation-and-sustainable-use',
  templateUrl: './conservation-and-sustainable-use.component.html',
  styleUrls: ['./conservation-and-sustainable-use.component.scss']
})
export class ConservationAndSustainableUseComponent extends BasePage01Component {

    constructor(_utilsService:UtilsService){
        super(_utilsService);
    }




}
