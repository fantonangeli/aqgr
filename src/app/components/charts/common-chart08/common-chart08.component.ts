import { Component, Input, OnChanges } from '@angular/core';
import { LoggerService } from 'aqgr-lib';
import {UtilsService} from '../../../services/utils.service';
import {BaseChart01Component} from '../base-chart01/base-chart01.component';
import {StackedColumns01Component} from '../stacked-columns01/stacked-columns01.component';
import {CommonChart08Service} from '../../../services/common/common-chart08.service';
import {ChartDataFormat} from '../../../namespace';

@Component({
  selector: 'app-common-chart08',
  template: `
    <app-stacked-columns01 [series]="series" *ngIf="series.length" [height]="300" [exportTitle]="exportTitle" unit="countries"></app-stacked-columns01>
  `,
  styles: []
})
export class CommonChart08Component extends BaseChart01Component implements OnChanges {
    dataFormat=ChartDataFormat.stackedKeyval;

    constructor(_service:CommonChart08Service, _utilsService:UtilsService, _logger:LoggerService) {
        super(_service, _utilsService, _logger);
    }


    ngOnChanges(){
        super.ngOnChanges();
    }
}
