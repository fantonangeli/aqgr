import { Component } from '@angular/core';
import { DynamicHTMLModule, DynamicHTMLComponent } from './core/components/dynamic-html';
import {FishStatCultSpecCountriesService} from './services/fish-stat-cult-spec-countries.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    fishdata=[];
    fishTableData=[];
    species=[];
    selectedSpecies=[];
    private _fishstatService;

    constructor(data: FishStatCultSpecCountriesService){
        this._fishstatService=data;

        this.fetchStats();
    }


    /**
     * fired when selected species are chenged
     *
     * @param {Object[]} e asfi codes
     */
    onSelectedSpeciesChange(e=[]){
        if(!e.length) this.fetchStats();
        else this.fetchStatsBySpecies(e.map((item)=>(item.value)).join(","));
    }


    /**
     * load data for the table and set it to fishTableData
     *
     * @param {Object[]} data the data from the service
     */
    loadTableData(data){
        if(!data) return;

        return data.map((e)=>{
            return [
                e.FAOarea,
                e.Species,
                e.FTypes,
                e.Strains,
                e.Captive,
                e.Wild,
                (e.Data || []).map((c)=>{
                    return [
                        c.Country,
                        c.Species,
                        c.FTypes,
                        c.Strains,
                        c.Captive,
                        c.Wild,
                    ];
                })

            ];
        });
    }

    /**
     * fetch the countries and load them in this._fishstatService
     * @param {string} asfisCodes the asfis codes as a list. Eg. "MSM,IPG"
     *
     */
    fetchStatsBySpecies(asfisCodes:string="") {
        if(!asfisCodes) return;

        this._fishstatService.getBySpecies(asfisCodes).subscribe(
            (data)=>{
                this.fishdata=data;
                this.fishTableData=this.loadTableData(data);
            },
            (error)=>{
                console.log("Network error: ", error);
            }
        );

    }
    
    /**
     * fetch the countries and load them in this._fishstatService
     *
     */
    fetchStats() {
        this._fishstatService.getAll().subscribe(
            (data)=>{
                this.fishdata=data;
                this.fishTableData=this.loadTableData(data);
            },
            (error)=>{
                console.log("Network error: ", error);
            }
        );

    }

}
