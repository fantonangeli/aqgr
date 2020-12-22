import { Component, OnChanges, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import {CommonChart13Service} from '../../../services/common/common-chart13.service';
import {StackedBars01Component} from '../stacked-bars01/stacked-bars01.component';
import { Filter} from '../../../components/search/namespace';
import {SearchServiceParams} from '../../../namespace';
import { LoggerService } from 'aqgr-lib';
import {BaseChart01Component} from '../base-chart01/base-chart01.component';
import {UtilsService} from '../../../services/utils.service'

@Component({
  selector: 'app-common-chart13',
  template: `
        <app-stacked-bars01 [series]="series" *ngIf="series.length" [xAxisTitle]="'chartsLabels.common-chart13-xAxisTitle' | translate" fontStyleItalic="true" [exportTitle]="exportTitle"></app-stacked-bars01>
    `,
  styleUrls: []
})
export class CommonChart13Component extends BaseChart01Component implements OnChanges {

    constructor(_service:CommonChart13Service, _utilsService:UtilsService, _logger:LoggerService) {
        super(_service, _utilsService, _logger);
    }

    ngOnChanges(){
        super.ngOnChanges();
    }


}

