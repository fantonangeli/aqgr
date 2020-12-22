import { Component, Input, OnChanges } from '@angular/core';
import { LoggerService } from 'aqgr-lib';
import {UtilsService} from '../../../services/utils.service'
import {BaseChart01Component} from '../base-chart01/base-chart01.component';
import {StackedColumns01Component} from '../stacked-columns01/stacked-columns01.component';
import {PoliciesChart02Service} from '../../../services/policies/policies-chart02.service';
import {ChartDataFormat} from '../../../namespace';

@Component({
  selector: 'app-policies-chart02',
  template: `
    <app-stacked-columns01 [series]="series" [yAxisTitle]="'chartsLabels.policies-chart02-yAxisTitle' | translate" *ngIf="series.length" [height]="300" [exportTitle]="exportTitle"></app-stacked-columns01>
  `,
  styles: []
})
export class PoliciesChart02Component extends BaseChart01Component implements OnChanges {
    dataFormat=ChartDataFormat.stackedKeyval;

    constructor(_service:PoliciesChart02Service, _utilsService:UtilsService, _logger:LoggerService) {
        super(_service, _utilsService, _logger);
    }


    ngOnChanges(){
        super.ngOnChanges();
    }
}
