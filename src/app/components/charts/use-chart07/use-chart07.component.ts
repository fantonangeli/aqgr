import { Component, Input, OnChanges } from '@angular/core';
import {LoggerService} from '../../../services/logger.service';
import {UtilsService} from '../../../services/utils.service'
import {BaseChart01Component} from '../base-chart01/base-chart01.component';
import {StackedColumns01Component} from '../stacked-columns01/stacked-columns01.component';
import {UseChart07Service} from '../../../services/use/use-chart07.service';
import {ChartDataFormat} from '../../../namespace';

@Component({
  selector: 'app-use-chart07',
  template: `
    <app-stacked-columns01 yAxisTitle="Number of protected areas" [series]="series" [legendEnabled]="false" *ngIf="series.length" [height]="300"></app-stacked-columns01>
  `,
  styles: []
})
export class UseChart07Component extends BaseChart01Component implements OnChanges {
    dataFormat=ChartDataFormat.stackedKeyval;

    constructor(_service:UseChart07Service, _utilsService:UtilsService, _logger:LoggerService) {
        super(_service, _utilsService, _logger);
    }

    ngOnChanges(){
        super.ngOnChanges();
    }
}
