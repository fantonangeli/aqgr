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
    private _fishstatService;

    constructor(data: FishStatCultSpecCountriesService){
        this._fishstatService=data;

        this.fetch();
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

    
    fetch() {
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

  title = 'aqgr-)nformation-system';
}
