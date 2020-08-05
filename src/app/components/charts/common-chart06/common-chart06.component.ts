import { Component, Input, OnChanges } from '@angular/core';
import { LoggerService } from 'aqgr-lib';
import {UtilsService} from '../../../services/utils.service'
import {BaseChart01Component} from '../base-chart01/base-chart01.component';
import {Pie01Component} from '../pie01/pie01.component';
import {CommonChart06Service} from '../../../services/common/common-chart06.service';
import {ChartDataFormat} from '../../../namespace';

@Component({
  selector: 'app-common-chart06',
  template:`
    <app-pie01 [series]="series" unit="tonnes" [legendEnabled]="false" [enableDataLabels]="true" *ngIf="series.length" [height]="300" [exportTitle]="exportTitle"></app-pie01>
  `,
  styleUrls: []
})
export class CommonChart06Component extends BaseChart01Component implements OnChanges {
    dataFormat=ChartDataFormat.keyval;

    constructor(_service:CommonChart06Service, _utilsService:UtilsService, _logger:LoggerService) {
        super(_service, _utilsService, _logger);
    }


    ngOnChanges(){
        super.ngOnChanges();
    }


}

