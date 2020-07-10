import { Component, Input, OnChanges } from '@angular/core';
import {LoggerService} from '../../../services/logger.service';
import {UtilsService} from '../../../services/utils.service'
import {BaseChart01Component} from '../base-chart01/base-chart01.component';
import {Columns01Component} from '../columns01/columns01.component';
import {UseChart08Service} from '../../../services/use/use-chart08.service';
import {ChartDataFormat} from '../../../namespace';

@Component({
  selector: 'app-use-chart08',
  template: `
    <app-columns01 yAxisTitle="Number of species reported by countries" [series]="series" *ngIf="series.length" [height]="300" [exportTitle]="exportTitle"></app-columns01>
  `,
  styles: []
})
export class UseChart08Component extends BaseChart01Component implements OnChanges {
    dataFormat=ChartDataFormat.keyval;
    
    constructor(_service:UseChart08Service, _utilsService:UtilsService, _logger:LoggerService) {
        super(_service, _utilsService, _logger);
    }


    ngOnChanges(){
        super.ngOnChanges();
    }
}
