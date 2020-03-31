import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-fish-stat-table',
  templateUrl: './fish-stat-table.component.html',
  styleUrls: ['./fish-stat-table.component.sass']
})
export class FishStatTableComponent implements OnInit {

    @Input()
    data: object = [];

  constructor() { }

  ngOnInit() {
  }

}
