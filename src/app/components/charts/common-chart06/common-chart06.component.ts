import { Component, OnChanges, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import {CommonChart06Service} from '../../../services/common/common-chart06.service';
import {StackedColumns01Component} from '../stacked-columns01/stacked-columns01.component';
import { Filter} from '../../../components/search/namespace';
import {SearchServiceParams} from '../../../namespace';
import {LoggerService} from '../../../services/logger.service';
import {BaseChart01Component} from '../base-chart01/base-chart01.component';
import {UtilsService} from '../../../services/utils.service'

@Component({
  selector: 'app-common-chart06',
  template:`
    <app-stacked-columns01 [series]="series" *ngIf="series.length"></app-stacked-columns01>
  `,
  styleUrls: []
})
export class CommonChart06Component extends BaseChart01Component implements OnChanges {

    constructor(_service:CommonChart06Service, _utilsService:UtilsService, _logger:LoggerService) {
        super(_service, _utilsService, _logger);
    }


    ngOnChanges(){
        super.ngOnChanges();
    }


}

