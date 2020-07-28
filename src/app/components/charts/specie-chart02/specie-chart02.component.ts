import { Component, Input, OnChanges } from "@angular/core";
import { LoggerService } from "../../../services/logger.service";
import { UtilsService } from "../../../services/utils.service";
import { BaseChart01Component } from "../base-chart01/base-chart01.component";
import { StackedColumns01Component } from "../stacked-columns01/stacked-columns01.component";
import { SpecieChart02Service } from "../../../services/specie/specie-chart02.service";
import { ChartDataFormat } from "../../../namespace";

@Component({
  selector: "app-specie-chart02",
  template: `
    <app-stacked-columns01 [series]="series"
      [legendEnabled]="false"
      *ngIf="series.length"
      [height]="300"
      [exportTitle]="exportTitle"
      [showChildrenInTooltip]="true"
    ></app-stacked-columns01>
  `,
  styles: [],
})
export class SpecieChart02Component extends BaseChart01Component implements OnChanges {
    unit = "specie";
    dataFormat = ChartDataFormat.stackedKeyval;

    constructor(
        _service: SpecieChart02Service,
        _utilsService: UtilsService,
        _logger: LoggerService
    ) {
        super(_service, _utilsService, _logger);
    }

    ngOnChanges() {
        super.ngOnChanges();
    }
}
