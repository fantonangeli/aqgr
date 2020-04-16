import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-search-bar',
    templateUrl: './search-bar.component.html'
})
export class SearchBarComponent implements OnInit {


    query: FormControl;
    @Output() searchEvent: EventEmitter<string> = new EventEmitter<string>();
    @Input() set initialValue(value: string) {
        if (value) {
            this.query.setValue(value);
        }
    }

    @Input() typeName: string;
    @Input() typeVersion: string;

    constructor() { }

    ngOnInit(): void {
        const storedSearch = JSON.parse(localStorage.getItem('fishery-' + this.typeName + '-' + this.typeVersion)) || {};
        this.query = new FormControl(storedSearch.query);
    }

    search() 
    {
        this.searchEvent.emit(this.query.value);
    }
}
