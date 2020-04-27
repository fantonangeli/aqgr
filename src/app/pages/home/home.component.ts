import { Component, OnInit } from '@angular/core';
import { DynamicHTMLModule, DynamicHTMLComponent } from '../../core/components/dynamic-html';
import { Filter, ResultSearchEvent} from '../../components/search/namespace';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    filterValues: Filter[]=[];



    constructor(){
    }

    ngOnInit(): void {}




    /**
     * action on facet click
     *
     * @param {object} type the type
     */
    searchAggregation(event: Filter[]) {
        this.filterValues=event;
    }



}
