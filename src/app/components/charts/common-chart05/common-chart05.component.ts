import { Component, Input, OnChanges } from '@angular/core';
import { LoggerService } from 'aqgr-lib';
import {UtilsService} from '../../../services/utils.service'
import {BaseChart01Component} from '../base-chart01/base-chart01.component';
import {Pie01Component} from '../pie01/pie01.component';
import {CommonChart05Service} from '../../../services/common/common-chart05.service';
import {ChartDataFormat} from '../../../namespace';

@Component({
  selector: 'app-common-chart05',
  template: `
    <app-pie01 [series]="series" unit="species" [legendEnabled]="false" [enableDataLabels]="true" *ngIf="series.length" [height]="300" [exportTitle]="exportTitle"></app-pie01>
  `,
  styles: []
})
export class CommonChart05Component extends BaseChart01Component implements OnChanges {
    dataFormat=ChartDataFormat.keyval;

    constructor(_service:CommonChart05Service, _utilsService:UtilsService, _logger:LoggerService) {
        super(_service, _utilsService, _logger);
    }

    ngOnChanges(){
        super.ngOnChanges();
    }
}
