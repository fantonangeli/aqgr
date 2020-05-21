import { Component, Input, OnChanges } from '@angular/core';
import {LoggerService} from '../../../services/logger.service';
import {UtilsService} from '../../../services/utils.service'
import {BaseChart01Component} from '../base-chart01/base-chart01.component';
import {Columns01Component} from '../columns01/columns01.component';
import {UseChart03Service} from '../../../services/use/use-chart03.service';

@Component({
  selector: 'app-use-chart03',
  template: `
    <app-columns01 [series]="series" *ngIf="series.length" [height]="300"></app-columns01>
  `,
  styles: []
})
export class UseChart03Component extends BaseChart01Component implements OnChanges {
    constructor(_service:UseChart03Service, _utilsService:UtilsService, _logger:LoggerService) {
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
