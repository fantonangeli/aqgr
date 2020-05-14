import { Component, OnInit } from '@angular/core';
import { DynamicHTMLModule, DynamicHTMLComponent } from '../../core/components/dynamic-html';
import { Filter, ResultSearchEvent} from '../../components/search/namespace';
import {UtilsService} from '../../services/utils.service';

@Component({
  selector: 'app-world',
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.scss']
})
export class WorldComponent implements OnInit {
    filterValues: Filter[]=[];
    reloadChartsRow01=true;

    getFilterValueByKey=this._utilsService.getFilterValueByKey;

    /**
     * reload the Charts Row 01
     *
     */
    ChartsRowReloader(){
        setTimeout(() => this.reloadChartsRow01 = false);
        setTimeout(() => this.reloadChartsRow01 = true);
    }


    /**
     * action on facet click
     *
     * @param {object} type the type
     */
    searchAggregation(event: Filter[]) {
        this.filterValues=event;

        this.ChartsRowReloader();
    }

  constructor(private _utilsService:UtilsService) { }

  ngOnInit() {
  }

}
