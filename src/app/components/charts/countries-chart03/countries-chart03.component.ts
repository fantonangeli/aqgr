import { Component, Input, OnChanges } from '@angular/core';
import {LoggerService} from '../../../services/logger.service';
import {UtilsService} from '../../../services/utils.service'
import {BaseChart01Component} from '../base-chart01/base-chart01.component';
import {StackedBars01Component} from '../stacked-bars01/stacked-bars01.component';
import {TaxonomiesService} from '../../../services/taxonomies.service';
import {ChartDataFormat} from '../../../namespace';

@Component({
  selector: 'app-countries-chart03',
  template: ` <app-bars01 [series]="series" *ngIf="series.length" xAxisTitle="Total number of species reported by countries"></app-bars01> `,
  styles: []
})
export class CountriesChart03Component extends BaseChart01Component implements OnChanges {
    dataFormat=ChartDataFormat.keyval;

    constructor(_service:TaxonomiesService, _utilsService:UtilsService, _logger:LoggerService) {
        super(_service, _utilsService, _logger);
    }


    ngOnChanges(){
        super.ngOnChanges();
    }
}
