import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
    selector: 'app-letter-search',
    templateUrl: 'letter-search.component.html',
    styleUrls: ['letter-search.component.css']
})

export class LetterSearchComponent implements OnInit {

    defaultLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
        'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    @Input()
    letters: string[];

    @Input()
    all: string;

    @Output()
    change: EventEmitter<string> = new EventEmitter<string>();

    selected: string;

    ngOnInit() {
        if (this.letters === undefined) {
            this.letters = this.defaultLetters;
        }
        this.selected = this.all;
    }

    searchLetter(letter: string) {
        this.selected = letter;
        this.change.emit(this.selected);
    }
}
