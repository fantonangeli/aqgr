import { Component, Input, OnChanges } from '@angular/core';
import { LoggerService } from 'aqgr-lib';
import {UtilsService} from '../../../services/utils.service'
import {BaseChart01Component} from '../base-chart01/base-chart01.component';
import { Columns01Component } from '../columns01/columns01.component';
import {SpecieChart01Service} from '../../../services/specie/specie-chart01.service';
import {ChartDataFormat} from '../../../namespace';

@Component({
  selector: 'app-specie-chart01',
  template: `
    <app-columns01 [series]="series" *ngIf="series.length" [showChildrenInTooltip]="true" [legendEnabled]="false" [height]="300" [exportTitle]="exportTitle" [yAxisTitle]="'chartsLabels.specie-chart01-yAxisTitle' | translate" ></app-columns01>
  `,
  styles: []
})
export class SpcecieChart01Component extends BaseChart01Component implements OnChanges {
    dataFormat=ChartDataFormat.keyval;


    constructor(_service:SpecieChart01Service, _utilsService:UtilsService, _logger:LoggerService) {
        super(_service, _utilsService, _logger);
    }


    ngOnChanges(){
        super.ngOnChanges();
    }
}
