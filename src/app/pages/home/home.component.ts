import { Component, OnInit } from '@angular/core';
import { DynamicHTMLModule, DynamicHTMLComponent } from '../../core/components/dynamic-html';
import { Filter, ResultSearchEvent} from '../../components/search/namespace';
import {UtilsService} from '../../services/utils.service';
import {BasePage01Component} from '../base-page01/base-page01.component';
import { GlobalInfoService } from '../../services/home/global-info.service';
import {LoggerService} from '../../services/logger.service';

@Component({
  selector: 'app-world',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends BasePage01Component implements OnInit {

    /**
     * this object contains the data from the GlobalInfoService
     */
    public globalInfoData:any={};

    constructor(_utilsService:UtilsService, private _infoService:GlobalInfoService, private _logger:LoggerService){
        super(_utilsService);
        // this.filterValues=[{"key":"taxonomies","parameter":"document.taxonomiesMapping","value":"Aquatic plants"},{"key":"species","parameter":"document.speciesMapping","value":"Algae"},{"key":"ftypes","parameter":"document.ftypeMapping","value":"Strains"},{"key":"sftypes","parameter":"document.sftypeMapping","value":"Hybrids"}];
    }



    /**
     * load the data from the GlobalInfoService 
     */
    public fetchInfo() {
        this._infoService.getData().subscribe(
            (data)=>{
                this.globalInfoData=data;
            },
            (error)=>{
                this._logger.error("Network error: ", error);
            }
        );

    }

    removeFilter(filterParam: Filter) {
        super.removeFilter(filterParam);

        this.ChartsRowReloader();
    }

    /**
     * action on facet click
     *
     * @param {object} type the type
     */
    searchAggregation(event: Filter[]) {
        super.searchAggregation(event);

        this.ChartsRowReloader();
    }


    /**
     * reload the Charts Row 01
     *
     */
    ChartsRowReloader(){
        setTimeout(() => this.reloadCharts = false);
        setTimeout(() => this.reloadCharts = true);
    }

    ngOnInit(){
        this.fetchInfo();
    }

}
