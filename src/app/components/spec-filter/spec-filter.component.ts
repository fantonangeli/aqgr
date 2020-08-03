import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {SpeciesService} from '../../services/species.service';
import { LoggerService } from 'aqgr-lib';

@Component({
  selector: 'app-spec-filter',
  templateUrl: './spec-filter.component.html',
  styleUrls: ['./spec-filter.component.scss']
})
export class SpecFilterComponent implements OnInit {
    isOpen=false;
    elements: any[] = [];
    @Input() selectedElements :object[]=[];
    private _service;

    @Output() selectedElementsChange = new EventEmitter<object[]>();

  constructor(specs:SpeciesService, private _logger:LoggerService) {
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
                this._logger.error("Network error: ", error);
            }
        );

    }
}
