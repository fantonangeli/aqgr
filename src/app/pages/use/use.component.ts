import { Component, OnInit, OnChanges } from '@angular/core';
import { DynamicHTMLModule, DynamicHTMLComponent } from '../../core/components/dynamic-html';
import { Filter, ResultSearchEvent} from '../../components/search/namespace';
import {UtilsService} from '../../services/utils.service';
import {BasePage01Component} from '../base-page01/base-page01.component';
import { environment } from '../../../environments/environment';
import { AccordionProps } from '../../namespace';

@Component({
  selector: 'app-use',
  templateUrl: './use.component.html',
})
export class UseComponent extends BasePage01Component {
    initialAccordionsIsOpen:boolean=environment.defaultAccordionIsOpenValue;
    
    constructor(_utilsService:UtilsService){
        super(_utilsService);

        this.accordionsProps=Array(13).fill(null).map(e=>(new AccordionProps()));
        this.accordionsProps[0].isOpen=true;
    }

    onFilterValuesChange(){
        this.accordionsProps[1].isVisible=(!this.selectedContinent && !this.selectedRegion && !this.selectedCountry);
        this.accordionsProps[2].isVisible=(!this.selectedSpecie && !this.selectedContinent && !this.selectedRegion && !this.selectedCountry);
        this.accordionsProps[3].isVisible=(!this.selectedSpecie);
        this.accordionsProps[4].isVisible=(!this.selectedContinent && !this.selectedRegion && !this.selectedCountry);
        this.accordionsProps[5].isVisible=(!this.selectedTaxonomy && !this.selectedSpecie);
        this.accordionsProps[6].isVisible=(!this.selectedContinent && !this.selectedRegion && !this.selectedCountry);
        this.accordionsProps[7].isVisible=(!this.selectedContinent && !this.selectedRegion && !this.selectedCountry);
        this.accordionsProps[8].isVisible=(!this.selectedTaxonomy && !this.selectedSpecie);
        this.accordionsProps[10].isVisible=(!this.selectedContinent && !this.selectedRegion && !this.selectedCountry);
        this.accordionsProps[11].isVisible=(!this.selectedTaxonomy && !this.selectedSpecie);
        this.accordionsProps[12].isVisible=(!this.selectedSpecie);
    }


}
