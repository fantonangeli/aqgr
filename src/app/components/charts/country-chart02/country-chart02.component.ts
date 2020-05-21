import { Component, OnChanges, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import {CountryDevSpeciesService} from '../../../services/country-dev-species.service';
import {StackedBars01Component} from '../stacked-bars01/stacked-bars01.component';
import { Filter} from '../../../components/search/namespace';
import {SearchServiceParams} from '../../../namespace';
import {LoggerService} from '../../../services/logger.service';
import {BaseChart01Component} from '../base-chart01/base-chart01.component';
import {UtilsService} from '../../../services/utils.service'

@Component({
  selector: 'app-country-chart02',
  template: `
        <app-stacked-bars01 [series]="series" *ngIf="series.length" xAxisTitle="Total number of farmed types reported by species"></app-stacked-bars01>
    `,
  styleUrls: []
})
export class CountryChart02Component extends BaseChart01Component implements OnChanges {

    constructor(_service:CountryDevSpeciesService, _utilsService:UtilsService, _logger:LoggerService) {
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

