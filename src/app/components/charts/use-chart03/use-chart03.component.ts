import { Component, Input, OnChanges } from '@angular/core';
import { LoggerService } from 'aqgr-lib';
import {UtilsService} from '../../../services/utils.service'
import {BaseChart01Component} from '../base-chart01/base-chart01.component';
import {Columns01Component} from '../columns01/columns01.component';
import {UseChart03Service} from '../../../services/use/use-chart03.service';
import {ChartDataFormat} from '../../../namespace';

@Component({
  selector: 'app-use-chart03',
  template: `
    <app-columns01 [series]="series" [legendEnabled]="false" *ngIf="series.length" [height]="300" [exportTitle]="exportTitle"></app-columns01>
  `,
  styles: []
})
export class UseChart03Component extends BaseChart01Component implements OnChanges {
    dataFormat=ChartDataFormat.keyval;
    
    constructor(_service:UseChart03Service, _utilsService:UtilsService, _logger:LoggerService) {
        super(_service, _utilsService, _logger);
    }


    ngOnChanges(){
        super.ngOnChanges();
    }
}
