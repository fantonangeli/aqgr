import { Component, Input, OnChanges } from '@angular/core';
import {FtypesService} from '../../../services/ftypes.service';
import {Pie01Component} from '../pie01/pie01.component';
import { Filter} from '../../../components/search/namespace';
import {SearchServiceParams} from '../../../namespace';
import {LoggerService} from '../../../services/logger.service';
import {BaseChart01Component} from '../base-chart01/base-chart01.component';
import {UtilsService} from '../../../services/utils.service'

@Component({
  selector: 'app-countries-chart01',
  template: `
    <app-pie01 [series]="series" [legendEnabled]="false" [enableDataLabels]="true" *ngIf="series.length" [height]="200"></app-pie01>
  `,
  styles: []
})
export class CountriesChart01Component extends BaseChart01Component implements OnChanges {
    @Input() selectedTaxonomy:Filter;
    @Input() selectedSpecie:Filter;

    constructor(_service:FtypesService, _utilsService:UtilsService, _logger:LoggerService) {
        super(_service, _utilsService, _logger);
    }


    ngOnChanges(){
        let params=new SearchServiceParams();
        params.taxonomy=(this.selectedTaxonomy)?this.selectedTaxonomy.value:"";
        params.specie=(this.selectedSpecie)?this.selectedSpecie.value:"";

        this.fetchData(params);
    }

}
