import { Component, OnChanges, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import {CommonChart12Service} from '../../../services/common/common-chart12.service';
import {StackedBars01Component} from '../stacked-bars01/stacked-bars01.component';
import { Filter} from '../../../components/search/namespace';
import {SearchServiceParams} from '../../../namespace';
import {LoggerService} from '../../../services/logger.service';
import {BaseChart01Component} from '../base-chart01/base-chart01.component';
import {UtilsService} from '../../../services/utils.service'

@Component({
  selector: 'app-common-chart12',
  template:`
        <app-stacked-bars01 [series]="series" *ngIf="series.length" [exportTitle]="exportTitle"></app-stacked-bars01>
    `,
  styleUrls: []
})
export class CommonChart12Component extends BaseChart01Component implements OnChanges {
    constructor(_service:CommonChart12Service, _utilsService:UtilsService, _logger:LoggerService) {
        super(_service, _utilsService, _logger);
    }

    ngOnChanges(){
        super.ngOnChanges();
    }


}
