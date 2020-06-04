import { Component, Input, OnChanges } from '@angular/core';
import {LoggerService} from '../../../services/logger.service';
import {UtilsService} from '../../../services/utils.service'
import {BaseChart01Component} from '../base-chart01/base-chart01.component';
import {StackedColumns01Component} from '../stacked-columns01/stacked-columns01.component';
import {PoliciesChart01Service} from '../../../services/policies/policies-chart01.service';
import {ChartDataFormat} from '../../../namespace';

@Component({
  selector: 'app-policies-chart01',
  template: `
    <app-stacked-columns01 [series]="series" *ngIf="series.length" [height]="300"></app-stacked-columns01>
  `,
  styles: []
})
export class PoliciesChart01Component extends BaseChart01Component implements OnChanges {
    dataFormat=ChartDataFormat.stackedKeyval;

    constructor(_service:PoliciesChart01Service, _utilsService:UtilsService, _logger:LoggerService) {
        super(_service, _utilsService, _logger);
    }


    ngOnChanges(){
        super.ngOnChanges();
    }
}
