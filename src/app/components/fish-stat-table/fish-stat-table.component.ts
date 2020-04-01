import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-fish-stat-table',
  templateUrl: './fish-stat-table.component.html',
  styleUrls: ['./fish-stat-table.component.scss']
})
export class FishStatTableComponent implements OnInit {

    @Input() data: object = [];

  constructor() { }

    /**
     * expand an element
     *
     * @param {Object} element the element to expand
     */
    expandElement(element){
        element.toggle = !element.toggle;
    }

  ngOnInit() {
  }

}
