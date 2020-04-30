import { Component, OnChanges, Input } from '@angular/core';
import {CountriesSFtypeService} from '../../../services/countries-sftype.service';
import {Pie01Component} from '../pie01/pie01.component';
import { Filter} from '../../../components/search/namespace';

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
    @Input() selectedFtype:Filter;


  constructor(sv:CountriesSFtypeService) {
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
     * fetch the sftypes by ftype and load them 
     *
     */
    fetchSFtypesByFtype(ftype:string) {
        this._service.getByFype(ftype).subscribe(
            (data)=>{
                this.series=this.initData(data);
            },
            (error)=>{
                console.log("Network error: ", error);
            }
        );

    }

    /**
     * fetch the data and load them
     *
     */
    fetchData() {
        this._service.getAll().subscribe(
            (data)=>{
                this.series=this.initData(data);
            },
            (error)=>{
                console.log("Network error: ", error);
            }
        );

    }

    ngOnChanges(){
        if(this.selectedFtype) this.fetchSFtypesByFtype(this.selectedFtype.value);
        else this.fetchData();
    }

}
