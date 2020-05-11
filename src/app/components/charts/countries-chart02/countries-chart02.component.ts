import { Component, OnChanges, Input } from '@angular/core';
import {SFtypesService} from '../../../services/sftypes.service';
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
     * @param {string} taxonomy the selected taxonomy
     * @param {string} specie the selected specie
     * @param {string} ftype the selected ftype
     */
    fetchData(taxonomy:string="", specie:string="", ftype:string="") {
        this._service.getAll(taxonomy, specie, ftype).subscribe(
            (data)=>{
                this.series=this.initData(data);
            },
            (error)=>{
                console.log("Network error: ", error);
            }
        );

    }

    ngOnChanges(){
        this.fetchData(
            (this.selectedTaxonomy)?this.selectedTaxonomy.value:"",
            (this.selectedSpecie)?this.selectedSpecie.value:"",
            (this.selectedFtype)?this.selectedFtype.value:""
        );
    }

}
