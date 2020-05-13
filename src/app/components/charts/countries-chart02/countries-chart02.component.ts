import { Component, OnChanges, Input } from '@angular/core';
import {SFtypesService} from '../../../services/sftypes.service';
import {Pie01Component} from '../pie01/pie01.component';
import { Filter} from '../../../components/search/namespace';
import {SearchServiceParams} from '../../../namespace';

@Component({
  selector: 'app-countries-chart02',
  template: `
    <app-pie01 [series]="series" [legendEnabled]="false" [enableDataLabels]="true" *ngIf="series.length" [height]="200"></app-pie01>
  `,
  styles: []
})
export class CountriesChart02Component implements OnChanges {
    series=[];
    private _service;
    @Input() selectedTaxonomy:Filter;
    @Input() selectedSpecie:Filter;
    @Input() selectedFtype:Filter;


  constructor(sv:SFtypesService) {
        this._service=sv;
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


    /**
     * fetch the data and load them
     *
     * @param {SearchServiceParams} params the params to send to the service
     */
    fetchData(params:SearchServiceParams=new SearchServiceParams()) {
        this._service.getAll(params).subscribe(
            (data)=>{
                this.series=this.initData(data);
            },
            (error)=>{
                console.log("Network error: ", error);
            }
        );

    }

    ngOnChanges(){
        let params=new SearchServiceParams();
        params.taxonomy=(this.selectedTaxonomy)?this.selectedTaxonomy.value:"";
        params.specie=(this.selectedSpecie)?this.selectedSpecie.value:"";
        params.ftype=(this.selectedFtype)?this.selectedFtype.value:"";

        this.fetchData(params);
    }

}
