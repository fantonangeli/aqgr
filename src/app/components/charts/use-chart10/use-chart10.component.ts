import { Component, Input, OnChanges } from '@angular/core';
import { LoggerService } from 'aqgr-lib';
import {UtilsService} from '../../../services/utils.service'
import {BaseChart01Component} from '../base-chart01/base-chart01.component';
import {Bars01Component} from '../bars01/bars01.component';
import {UseChart10Service} from '../../../services/use/use-chart10.service';
import {ChartDataFormat} from '../../../namespace';

@Component({
  selector: 'app-use-chart10',
  template: `
    <app-bars01 [series]="series" *ngIf="series.length" [height]="300" xAxisTitle="No of live gene banks reported" fontStyleItalic="true" [exportTitle]="exportTitle"></app-bars01>
  `,
  styles: []
})
export class UseChart10Component extends BaseChart01Component implements OnChanges {
    dataFormat=ChartDataFormat.keyval;

    constructor(_service:UseChart10Service, _utilsService:UtilsService, _logger:LoggerService) {
        super(_service, _utilsService, _logger);
    }


    ngOnChanges(){
        super.ngOnChanges();
    }
}
