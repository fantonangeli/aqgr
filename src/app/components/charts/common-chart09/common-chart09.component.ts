import { Component, Input, OnChanges } from "@angular/core";
import { LoggerService } from 'aqgr-lib';
import { UtilsService } from "../../../services/utils.service";
import { BaseChart01Component } from "../base-chart01/base-chart01.component";
import { StackedColumns01Component } from "../stacked-columns01/stacked-columns01.component";
import { CommonChart09Service } from "../../../services/common/common-chart09.service";
import { ChartDataFormat } from "../../../namespace";
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-common-chart09',
  template: `
    <app-stacked-columns01
      [series]="series"
      [yAxisTitle]="'chartsLabels.common-chart09-yAxisTitle' | translate"
      [pointFormatter]="pointFormatter"
      [legendEnabled]="false"
      *ngIf="series.length"
      [height]="300"
      [exportTitle]="exportTitle"
    ></app-stacked-columns01>
  `,
  styles: [],
})
export class CommonChart09Component extends BaseChart01Component implements OnChanges {
    unit = "specie";
    dataFormat = ChartDataFormat.stackedKeyval;
    tooltipLabels:any;

    constructor(
        _service: CommonChart09Service,
        _utilsService: UtilsService,
        _logger: LoggerService,
        translate: TranslateService
    ) {
        super(_service, _utilsService, _logger);

        translate.get('chartsLabels.common-chart09-tooltipLabels').subscribe((res: object) => {
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
