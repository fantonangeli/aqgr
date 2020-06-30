import { Component, Input, OnChanges } from '@angular/core';
import {LoggerService} from '../../../services/logger.service';
import {UtilsService} from '../../../services/utils.service'
import {BaseChart01Component} from '../base-chart01/base-chart01.component';
import {Pie01Component} from '../pie01/pie01.component';
import {CommonChart14Service} from '../../../services/common/common-chart14.service';
import {ChartDataFormat} from '../../../namespace';

@Component({
  selector: 'app-common-chart14',
  template: `
    <app-pie01 [series]="series" unit="areas" [legendEnabled]="false" [enableDataLabels]="true" *ngIf="series.length" [height]="300"></app-pie01>
  `,
  styles: []
})
export class CommonChart14Component extends BaseChart01Component implements OnChanges {
    dataFormat=ChartDataFormat.keyval;

    constructor(_service:CommonChart14Service, _utilsService:UtilsService, _logger:LoggerService) {
        super(_service, _utilsService, _logger);
    }

    ngOnChanges(){
        super.ngOnChanges();
    }
}
