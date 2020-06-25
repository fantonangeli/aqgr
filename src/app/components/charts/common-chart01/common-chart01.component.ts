import { Component, Input, OnChanges } from '@angular/core';
import {LoggerService} from '../../../services/logger.service';
import {UtilsService} from '../../../services/utils.service'
import {BaseChart01Component} from '../base-chart01/base-chart01.component';
import {StackedColumns01Component} from '../stacked-columns01/stacked-columns01.component';
import {FtypesService} from '../../../services/ftypes.service';
import {ChartDataFormat} from '../../../namespace';

@Component({
  selector: 'app-common-chart01',
  template: `
    <app-pie01 [series]="series" [legendEnabled]="false" [enableDataLabels]="true" *ngIf="series.length" [height]="height"></app-pie01>
  `,
  styles: []
})
export class CommonChart01Component extends BaseChart01Component implements OnChanges {
    dataFormat=ChartDataFormat.keyval;

    constructor(_service:FtypesService, _utilsService:UtilsService, _logger:LoggerService) {
        super(_service, _utilsService, _logger);
    }


    ngOnChanges(){
        super.ngOnChanges();
    }
}
