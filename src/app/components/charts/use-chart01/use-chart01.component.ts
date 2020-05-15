import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-use-chart01',
    template: `
    <app-pie01 [series]="series" [legendEnabled]="false" [enableDataLabels]="true" *ngIf="series.length" [height]="300"></app-pie01>
  `,
    styles: []
})
export class UseChart01Component implements OnInit {
    /* TODO: use data from service */
    series=[{
                "data": [{
                        "name": "Native",
                        "y": 80
                    },
                    {
                        "name": "Non-native",
                        "y": 20
                    }
                ]
            }];

    constructor() {}

    ngOnInit() {
    }

}
