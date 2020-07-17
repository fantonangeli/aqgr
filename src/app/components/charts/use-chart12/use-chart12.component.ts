import { Component, Input, OnChanges } from '@angular/core';
import {LoggerService} from '../../../services/logger.service';
import {UtilsService} from '../../../services/utils.service'
import {BaseChart01Component} from '../base-chart01/base-chart01.component';
import {StackedColumns01Component} from '../stacked-columns01/stacked-columns01.component';
import {UseChart12Service} from '../../../services/use/use-chart12.service';
import {ChartDataFormat} from '../../../namespace';

@Component({
  selector: 'app-use-chart12',
  template: `
    <app-stacked-columns01 [series]="series" yAxisTitle="Number of species reported" [legendEnabled]="false" *ngIf="series.length" [height]="300" [exportTitle]="exportTitle"></app-stacked-columns01>
  `,
  styles: []
})
export class UseChart12Component extends BaseChart01Component implements OnChanges {
    dataFormat=ChartDataFormat.stackedKeyval;

    constructor(_service:UseChart12Service, _utilsService:UtilsService, _logger:LoggerService) {
        super(_service, _utilsService, _logger);
    }

    ngOnChanges(){
        super.ngOnChanges();
    }
}
