import { Component, OnInit, Input } from '@angular/core';
import {SpeciesService} from '../../services/species.service';

@Component({
  selector: 'app-spec-filter',
  templateUrl: './spec-filter.component.html',
  styleUrls: ['./spec-filter.component.scss']
})
export class SpecFilterComponent implements OnInit {
    isOpen=false;
    elements: any[] = [];
    selectedElements=[];
    private _service;

  constructor(specs:SpeciesService) {
        this._service=specs;

        this.fetchSpecs();
  }

  ngOnInit() {
  }

    /**
     * fetch the species and load them in this._service
     *
     */
    fetchSpecs() {
        this._service.getAll().subscribe(
            (data)=>{
                this.elements=data;
            },
            (error)=>{
                console.log("Network error: ", error);
            }
        );

    }
}
