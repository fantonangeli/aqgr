import { Component, Input, OnChanges } from '@angular/core';
import {LoggerService} from '../../../services/logger.service';
import {UtilsService} from '../../../services/utils.service'
import {BaseChart01Component} from '../base-chart01/base-chart01.component';
import {StackedColumns01Component} from '../stacked-columns01/stacked-columns01.component';
import {UseChart05Service} from '../../../services/use/use-chart05.service';
import {ChartDataFormat} from '../../../namespace';

@Component({
  selector: 'app-use-chart05',
  template: `
    <app-stacked-columns01 [series]="series" [legendEnabled]="false" *ngIf="series.length" [height]="300"></app-stacked-columns01>
  `,
  styles: []
})
export class UseChart05Component extends BaseChart01Component implements OnChanges {
    dataFormat=ChartDataFormat.stackedKeyval;

    constructor(_service:UseChart05Service, _utilsService:UtilsService, _logger:LoggerService) {
        super(_service, _utilsService, _logger);
    }

    ngOnChanges(){
        super.ngOnChanges();
    }
}