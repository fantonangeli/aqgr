import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-fish-stat-table',
  templateUrl: './fish-stat-table.component.html',
  styleUrls: ['./fish-stat-table.component.scss']
})
export class FishStatTableComponent implements OnInit {

    @Input() data: any[] = [];
    @Input() columns: any[] = [];
    @Input() childColumns: any[] = [];

  constructor() { }

    /**
     * expand an element
     *
     * @param {Object} element the element to expand
     */
    expandElement(element){
        for (var i = 0, len = this.data.length; i < len; i++) {
            this.data[i].toggle=false;
        }

        element.toggle = true;
    }

  ngOnInit() {
  }

}
