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
    private _fishstatService;

    constructor(data: FishStatCultSpecCountriesService){
        this._fishstatService=data;

        this.fetch();
    }

    
    fetch() {
        this._fishstatService.getAll().subscribe(
            (data)=>{
                this.fishdata=data;
                console.table(data);
            },
            (error)=>{
                console.log("Network error: ", error);
            }
        );

    }

  title = 'aqgr-)nformation-system';
}
