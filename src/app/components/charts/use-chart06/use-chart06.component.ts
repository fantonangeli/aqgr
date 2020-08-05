import { Component, Input, OnChanges } from '@angular/core';
import { LoggerService } from 'aqgr-lib';
import {UtilsService} from '../../../services/utils.service'
import {BaseChart01Component} from '../base-chart01/base-chart01.component';
import {StackedColumns01Component} from '../stacked-columns01/stacked-columns01.component';
import {UseChart06Service} from '../../../services/use/use-chart06.service';
import {ChartDataFormat} from '../../../namespace';

@Component({
  selector: 'app-use-chart06',
  template: `
    <app-stacked-columns01 
        [series]="series" 
        [pointFormatter]="pointFormatter"
        yAxisTitle="Number of species" 
        [legendEnabled]="false" 
        *ngIf="series.length" 
        [height]="300" 
        [exportTitle]="exportTitle"
    ></app-stacked-columns01>
  `,
  styles: []
})
export class UseChart06Component extends BaseChart01Component implements OnChanges {
    unit = "specie";
    dataFormat=ChartDataFormat.stackedKeyval;

    constructor(_service:UseChart06Service, _utilsService:UtilsService, _logger:LoggerService) {
        super(_service, _utilsService, _logger);
    }

    pointFormatter = function() {
        let seriesName = "";
        const unit = "species";

        if (this.series.name === "No risk") {
            seriesName = "No risk - no risk have been identified for this species";
        } else if (this.series.name === "Potential risk") {
            seriesName =
                "Potential risk - risks have been identified but no impacts recorded";
        } else if (this.series.name === "Risk") {
            seriesName = "Risk - there are recorded impacts of this species";
        }


        return `<span style='color:${this.color}'>●</span> ${seriesName}: <b>${this.y} ${unit} (${this.percentage.toFixed(1)}%)`;
    };

    ngOnChanges() {
        super.ngOnChanges();
    }
}
