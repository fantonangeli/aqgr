import { Component, Input, OnChanges } from '@angular/core';
import { LoggerService } from 'aqgr-lib';
import {UtilsService} from '../../../services/utils.service'
import {BaseChart01Component} from '../base-chart01/base-chart01.component';
import {Pie01Component} from '../pie01/pie01.component';
import {CountryChart01Service} from '../../../services/country/country-chart01.service';
import {ChartDataFormat} from '../../../namespace';

@Component({
  selector: 'app-country-chart01',
  template: `
    <app-pie01 [series]="series" [legendEnabled]="false" [enableDataLabels]="true" *ngIf="series.length" [height]="300" [exportTitle]="exportTitle"></app-pie01>
  `,
  styles: []
})
export class CountryChart01Component extends BaseChart01Component implements OnChanges {
    dataFormat=ChartDataFormat.keyval;

    constructor(_service:CountryChart01Service, _utilsService:UtilsService, _logger:LoggerService) {
        super(_service, _utilsService, _logger);
    }

    ngOnChanges(){
        super.ngOnChanges();
    }
}
