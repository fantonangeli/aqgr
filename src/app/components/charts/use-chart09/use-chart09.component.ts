import { Component, Input, OnChanges } from '@angular/core';
import { LoggerService } from 'aqgr-lib';
import {UtilsService} from '../../../services/utils.service'
import {BaseChart01Component} from '../base-chart01/base-chart01.component';
import {Columns01Component} from '../columns01/columns01.component';
import {UseChart09Service} from '../../../services/use/use-chart09.service';
import {ChartDataFormat} from '../../../namespace';

@Component({
  selector: 'app-use-chart09',
  template: `
    <app-columns01 [series]="series" *ngIf="series.length" [height]="300" [yAxisTitle]="'chartsLabels.use-chart09-yAxisTitle' | translate" [exportTitle]="exportTitle" [legendEnabled]="false"></app-columns01>
  `,
  styles: []
})
export class UseChart09Component extends BaseChart01Component implements OnChanges {
    dataFormat=ChartDataFormat.keyval;
    
    constructor(_service:UseChart09Service, _utilsService:UtilsService, _logger:LoggerService) {
        super(_service, _utilsService, _logger);
    }


    ngOnChanges(){
        super.ngOnChanges();
    }
}
