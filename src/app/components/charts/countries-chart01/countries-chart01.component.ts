import { Component, Input, OnChanges } from '@angular/core';
import {CountriesFtypeService} from '../../../services/countries-ftype.service';
import {Pie01Component} from '../pie01/pie01.component';
import { Filter} from '../../../components/search/namespace';

@Component({
  selector: 'app-countries-chart01',
  template: `
    <app-pie01 [series]="series" [legendEnabled]="false" [enableDataLabels]="true" *ngIf="series.length" [height]="200"></app-pie01>
  `,
  styles: []
})
export class CountriesChart01Component implements OnChanges {
    series=[];
    private _service;
    @Input() selectedSpecie:Filter;


  constructor(sv:CountriesFtypeService) {
        this._service=sv;

        this.fetchData();
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

    /**
     * fetch the ftypes by specie and load them 
     * @param {string} specie the name of the specie
     *
     */
    fetchFtypesBySpecie(specie:string) {
        this._service.getBySpecie(specie).subscribe(
            (data)=>{
                this.series=this.initData(data);
            },
            (error)=>{
                console.log("Network error: ", error);
            }
        );

    }

    ngOnChanges(){
        if(this.selectedSpecie) this.fetchFtypesBySpecie(this.selectedSpecie.value);
        else this.fetchData();
    }

}
