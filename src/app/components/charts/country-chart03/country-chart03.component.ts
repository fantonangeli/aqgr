import { Component, Input, OnChanges } from '@angular/core';
import {LoggerService} from '../../../services/logger.service';
import {UtilsService} from '../../../services/utils.service'
import {BaseChart01Component} from '../base-chart01/base-chart01.component';
import {StackedColumns01Component} from '../stacked-columns01/stacked-columns01.component';
import { CountryChart03Service } from '../../../services/country/country-chart03.service';
import {ChartDataFormat} from '../../../namespace';

@Component({
  selector: 'app-country-chart03',
  template: `
    <app-stacked-columns01 [series]="series" *ngIf="series.length" [height]="300" [exportTitle]="exportTitle"></app-stacked-columns01>
  `,
  styles: []
})
export class CountryChart03Component extends BaseChart01Component implements OnChanges {
    dataFormat=ChartDataFormat.stackedKeyval;

    constructor(_service:CountryChart03Service, _utilsService:UtilsService, _logger:LoggerService) {
        super(_service, _utilsService, _logger);
    }

    ngOnChanges(){
        super.ngOnChanges();
    }
}
