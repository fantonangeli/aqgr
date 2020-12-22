import { Component, Input, OnChanges } from '@angular/core';
import { LoggerService } from 'aqgr-lib';
import {UtilsService} from '../../../services/utils.service'
import {BaseChart01Component} from '../base-chart01/base-chart01.component';
import {StackedColumns01Component} from '../stacked-columns01/stacked-columns01.component';
import {UseChart06Service} from '../../../services/use/use-chart06.service';
import {ChartDataFormat} from '../../../namespace';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-use-chart06',
  template: `
    <app-stacked-columns01 
        [series]="series" 
        [pointFormatter]="pointFormatter"
        [yAxisTitle]="'chartsLabels.use-chart06-yAxisTitle' | translate" 
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
    tooltipLabels:any;

    constructor(_service:UseChart06Service, _utilsService:UtilsService, _logger:LoggerService, translate:TranslateService) {
        super(_service, _utilsService, _logger);

        translate.get('chartsLabels.use-chart06-tooltipLabels').subscribe((res: object) => {
            this.tooltipLabels=res;
            const tl=res;

            this.pointFormatter=function(){
                let seriesName = "";
                const unit = "species";

                seriesName=tl[this.series.name];

                return `<span style='color:${this.color}'>●</span> ${seriesName}: <b>${this.y} ${unit} (${this.percentage.toFixed(1)}%)`;
            }
        });
    }

    pointFormatter(){}

    ngOnChanges() {
        super.ngOnChanges();
    }
}
