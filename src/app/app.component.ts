import { Component } from '@angular/core';
import  * as jsonata  from 'jsonata';
import {FishStatCultSpecCountriesService} from './services/fish-stat-cult-spec-countries.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
    private _fishstatService;

    constructor(data: FishStatCultSpecCountriesService){
        this._fishstatService=data;

        this.fetch();
    }

    
    fetch() {
        let fishdata;

        this._fishstatService.getAll().subscribe(
            (data)=>{
                fishdata=data;
                console.table(data);
            },
            (error)=>{
                console.log("Network error: ", error);
            }
        );

    }

  title = 'aqgr-)nformation-system';
}
