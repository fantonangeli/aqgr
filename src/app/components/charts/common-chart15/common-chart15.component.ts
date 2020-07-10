import { Component, Input, OnChanges } from '@angular/core';
import {LoggerService} from '../../../services/logger.service';
import {UtilsService} from '../../../services/utils.service'
import {BaseChart01Component} from '../base-chart01/base-chart01.component';
import {CommonChart15Service} from '../../../services/common/common-chart15.service';
import {ChartDataFormat} from '../../../namespace';

@Component({
  selector: 'app-common-chart15',
  template: `
    <app-donut01 [series]="series" totalTemplate="Total number of<br>institutions<br>{total}" unit="institutions" [legendEnabled]="false" [enableDataLabels]="true" *ngIf="series.length" [height]="300" [exportTitle]="exportTitle"></app-donut01>
  `,
  styles: []
})
export class CommonChart15Component extends BaseChart01Component implements OnChanges {
    dataFormat=ChartDataFormat.keyval;
    calcTotals=true;

    constructor(_service:CommonChart15Service, _utilsService:UtilsService, _logger:LoggerService) {
        super(_service, _utilsService, _logger);
    }

    ngOnChanges(){
        super.ngOnChanges();
    }
}
