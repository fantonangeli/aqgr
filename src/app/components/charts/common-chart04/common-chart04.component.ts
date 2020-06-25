import { Component, Input, OnChanges } from '@angular/core';
import {LoggerService} from '../../../services/logger.service';
import {UtilsService} from '../../../services/utils.service'
import {BaseChart01Component} from '../base-chart01/base-chart01.component';
import {Bars01Component} from '../bars01/bars01.component';
import {UseChart04Service} from '../../../services/use/use-chart04.service';
import {ChartDataFormat} from '../../../namespace';

@Component({
  selector: 'app-common-chart04',
  template: `
    <app-bars01 [series]="series" [legendEnabled]="false" *ngIf="series.length" [height]="300" fontStyleItalic="true"></app-bars01>
  `,
  styles: []
})
export class CommonChart04Component extends BaseChart01Component implements OnChanges {
    dataFormat=ChartDataFormat.keyval;

    constructor(_service:UseChart04Service, _utilsService:UtilsService, _logger:LoggerService) {
        super(_service, _utilsService, _logger);
    }

    ngOnChanges(){
        super.ngOnChanges();
    }
}
