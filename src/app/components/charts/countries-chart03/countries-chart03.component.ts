import { Component, Input, OnChanges } from '@angular/core';
import {LoggerService} from '../../../services/logger.service';
import {UtilsService} from '../../../services/utils.service'
import {BaseChart01Component} from '../base-chart01/base-chart01.component';
import {SpeciesService} from '../../../services/species.service';
import {StackedBars01Component} from '../stacked-bars01/stacked-bars01.component';
import {SearchServiceParams} from '../../../namespace';
import { Filter} from '../../../components/search/namespace';

@Component({
  selector: 'app-countries-chart03',
    // todo: Title: Total number of countries reported on this specie
  template: ` <app-bars01 [series]="series" *ngIf="series.length" xAxisTitle="Total number of species reported by countries"></app-bars01> `,
  styles: []
})
export class CountriesChart03Component extends BaseChart01Component implements OnChanges {
    @Input() selectedTaxonomy:Filter;

    constructor(_service:SpeciesService, _utilsService:UtilsService, _logger:LoggerService) {
        super(_service, _utilsService, _logger);
    }

    /**
     * initialize the data
     *
     * @param {any[]} data=[] the data from the service
     * @returns {object[]} the series in highchart format
     */
    initData(data:any[]=[]):object[]{
        let r=[{
            "data": [
            ]
        }];

        r[0].data=data.map(e=>({"name": e.key, "y":e.value}));

        return r;
    }

    ngOnChanges(){
        let params=new SearchServiceParams();
        params.taxonomy=(this.selectedTaxonomy)?this.selectedTaxonomy.value:"";

        super.fetchData(params);
    }

}
