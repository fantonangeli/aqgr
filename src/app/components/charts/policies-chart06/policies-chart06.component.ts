import { Component, Input, OnChanges } from '@angular/core';
import {LoggerService} from '../../../services/logger.service';
import {UtilsService} from '../../../services/utils.service'
import {BaseChart01Component} from '../base-chart01/base-chart01.component';
import {Pie01Component} from '../pie01/pie01.component';
import {PoliciesChart06Service} from '../../../services/policies/policies-chart06.service';
import {ChartDataFormat} from '../../../namespace';

@Component({
  selector: 'app-policies-chart06',
  template: `
    <app-pie01 [series]="series" [legendEnabled]="false" [enableDataLabels]="true" *ngIf="series.length" [height]="300"></app-pie01>
  `,
  styles: []
})
export class PoliciesChart06Component extends BaseChart01Component implements OnChanges {
    dataFormat=ChartDataFormat.keyval;

    constructor(_service:PoliciesChart06Service, _utilsService:UtilsService, _logger:LoggerService) {
        super(_service, _utilsService, _logger);
    }

    ngOnChanges(){
        super.ngOnChanges();
    }
}