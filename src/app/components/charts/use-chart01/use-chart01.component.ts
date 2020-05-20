import { Component, Input, OnChanges } from '@angular/core';
import {Pie01Component} from '../pie01/pie01.component';
import { Filter} from '../../../components/search/namespace';
import {SearchServiceParams} from '../../../namespace';
import {LoggerService} from '../../../services/logger.service';
import {UtilsService} from '../../../services/utils.service'
import {UseChart01Service} from '../../../services/use/use-chart01.service';

@Component({
  selector: 'app-use-chart01',
  template: `
    <app-pie01 [series]="series" [legendEnabled]="false" [enableDataLabels]="true" *ngIf="series.length" [height]="300"></app-pie01>
  `,
  styles: []
})
export class UseChart01Component implements OnChanges {
    series=[];
    @Input() filterValues:Filter[]=[];


  constructor(private _service:UseChart01Service, private _utilsService:UtilsService, private _logger:LoggerService) { }

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


    /**
     * fetch the data and load them
     * @param {SearchServiceParams} params the params to send to the service
     *
     */
    fetchData(params:SearchServiceParams=new SearchServiceParams()) {
        this._service.getAll(params).subscribe(
            (data)=>{
                this.series=this.initData(data);
            },
            (error)=>{
                this._logger.error("Network error: ", error);
            }
        );

    }


    ngOnChanges(){
        this.fetchData(this._utilsService.getSearchServiceParamsFromFilterValues(this.filterValues));
    }

}
