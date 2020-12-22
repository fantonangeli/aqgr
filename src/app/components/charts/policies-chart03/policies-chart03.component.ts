import { Component, Input, OnChanges } from '@angular/core';
import { LoggerService } from 'aqgr-lib';
import {UtilsService} from '../../../services/utils.service'
import {BaseChart01Component} from '../base-chart01/base-chart01.component';
import {PoliciesChart03Service} from '../../../services/policies/policies-chart03.service';
import {ChartDataFormat} from '../../../namespace';

@Component({
  selector: 'app-policies-chart03',
  template: `
    <app-donut01 [series]="series" [totalTemplate]="'chartsLabels.policies-chart03-total' | translate" unit="areas" [legendEnabled]="false" [enableDataLabels]="true" *ngIf="series.length" [height]="300" [exportTitle]="exportTitle"></app-donut01>
  `,
  styles: []
})
export class PoliciesChart03Component extends BaseChart01Component implements OnChanges {
    dataFormat=ChartDataFormat.keyval;
    calcTotals=true;

    constructor(_service:PoliciesChart03Service, _utilsService:UtilsService, _logger:LoggerService) {
        super(_service, _utilsService, _logger);
    }

    ngOnChanges(){
        super.ngOnChanges();
    }
}
