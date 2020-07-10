import { Component, Input, OnChanges } from '@angular/core';
import {LoggerService} from '../../../services/logger.service';
import {UtilsService} from '../../../services/utils.service'
import {BaseChart01Component} from '../base-chart01/base-chart01.component';
import {PoliciesChart04Service} from '../../../services/policies/policies-chart04.service';
import {ChartDataFormat} from '../../../namespace';

@Component({
  selector: 'app-policies-chart04',
  template: `
    <app-donut01 [series]="series" totalTemplate="Total number of<br>institutions reported<br>{total}" unit="areas" [legendEnabled]="false" [enableDataLabels]="true" *ngIf="series.length" [height]="300" [exportTitle]="exportTitle"></app-donut01>
  `,
  styles: []
})
export class PoliciesChart04Component extends BaseChart01Component implements OnChanges {
    dataFormat=ChartDataFormat.keyval;
    calcTotals=true;

    constructor(_service:PoliciesChart04Service, _utilsService:UtilsService, _logger:LoggerService) {
        super(_service, _utilsService, _logger);
    }

    ngOnChanges(){
        super.ngOnChanges();
    }
}
