import { Component, OnChanges, Input } from '@angular/core';
import {SFtypesService} from '../../../services/sftypes.service';
import {Pie01Component} from '../pie01/pie01.component';
import { Filter} from '../../../components/search/namespace';
import {SearchServiceParams} from '../../../namespace';
import {LoggerService} from '../../../services/logger.service';
import {BaseChart01Component} from '../base-chart01/base-chart01.component';
import {UtilsService} from '../../../services/utils.service'

@Component({
  selector: 'app-countries-chart02',
  template: `
    <app-pie01 [series]="series" [legendEnabled]="false" [enableDataLabels]="true" *ngIf="series.length" [height]="200"></app-pie01>
  `,
  styles: []
})
export class CountriesChart02Component extends BaseChart01Component implements OnChanges {


    @Input() selectedTaxonomy:Filter;
    @Input() selectedSpecie:Filter;
    @Input() selectedFtype:Filter;


    constructor(_service:SFtypesService, _utilsService:UtilsService, _logger:LoggerService) {
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
        params.specie=(this.selectedSpecie)?this.selectedSpecie.value:"";
        params.ftype=(this.selectedFtype)?this.selectedFtype.value:"";

        this.fetchData(params);
    }

}
