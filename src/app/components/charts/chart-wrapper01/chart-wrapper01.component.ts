import { Component, OnInit, Input } from '@angular/core';
import { Filter } from '../../../components/search/namespace';

@Component({
  selector: 'app-chart-wrapper01',
  templateUrl: './chart-wrapper01.component.html',
  styles: []
})
export class ChartWrapper01Component implements OnInit {

    /** List of filters used for searching */
    @Input() filterValues: Filter[];

  constructor() { }

  ngOnInit() {
  }

}
