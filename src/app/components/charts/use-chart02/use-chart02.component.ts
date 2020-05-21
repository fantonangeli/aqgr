import { Component, Input, OnChanges } from '@angular/core';
import {LoggerService} from '../../../services/logger.service';
import {UtilsService} from '../../../services/utils.service'
import {BaseChart01Component} from '../base-chart01/base-chart01.component';
import {StackedColumns01Component} from '../stacked-columns01/stacked-columns01.component';
import {UseChart02Service} from '../../../services/use/use-chart02.service';

@Component({
  selector: 'app-use-chart02',
  template: `
    <app-stacked-columns01 [series]="series" *ngIf="series.length" [height]="300"></app-stacked-columns01>
  `,
  styles: []
})
export class UseChart02Component extends BaseChart01Component implements OnChanges {
    constructor(_service:UseChart02Service, _utilsService:UtilsService, _logger:LoggerService) {
        super(_service, _utilsService, _logger);
    }

    /**
     * initialize the data
     *
     * @param {any[]} data=[] the data from the service
     * @returns {object[]} the series in highchart format
     */
    initData(data:any[]=[]):object[]{
        return data;
    }


    ngOnChanges(){
        super.ngOnChanges();
    }
}
