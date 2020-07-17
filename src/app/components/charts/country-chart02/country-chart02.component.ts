import { Component, Input, OnChanges } from '@angular/core';
import {LoggerService} from '../../../services/logger.service';
import {UtilsService} from '../../../services/utils.service'
import {BaseChart01Component} from '../base-chart01/base-chart01.component';
import { Columns01Component } from '../columns01/columns01.component';
import {CountryChart02Service} from '../../../services/country/country-chart02.service';
import {ChartDataFormat} from '../../../namespace';

@Component({
  selector: 'app-country-chart02',
  template: `
    <app-columns01 [series]="series" *ngIf="series.length" [height]="300" [exportTitle]="exportTitle"></app-columns01>
  `,
  styles: []
})
export class CountryChart02Component extends BaseChart01Component implements OnChanges {
    dataFormat=ChartDataFormat.stackedKeyval;


    constructor(_service:CountryChart02Service, _utilsService:UtilsService, _logger:LoggerService) {
        super(_service, _utilsService, _logger);
    }


    ngOnChanges(){
        super.ngOnChanges();
    }
}
