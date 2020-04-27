import { Component, Input, AfterViewInit } from '@angular/core';
import * as Highcharts from 'highcharts';

declare var require: any;
let Boost = require('highcharts/modules/boost');
let noData = require('highcharts/modules/no-data-to-display');
let More = require('highcharts/highcharts-more');

Boost(Highcharts);
noData(Highcharts);
More(Highcharts);
noData(Highcharts);

@Component({
  selector: 'app-bars01',
  template: `<div [attr.id]="wrapperId"></div> `,
  styleUrls: []
})
export class Bars01Component implements AfterViewInit  {
    wrapperId=`pie${Math.floor(Math.random() * 1000)}Container`;
    @Input() series :object[]=[];
    @Input() xAxisTitle :string;

    // TODO: hide the link to highcharts

    /**
     * show the chart
     *
     */
    showChart(){
        //todo: xaxis steps must be 1

        let options: any = {
            chart: {
                type: "bar",
            },
            title: {
                text: null
            },
            xAxis: {
                type: 'category'
            },
            yAxis: {
                title: (this.xAxisTitle)?{
                    text: this.xAxisTitle,
                    align: 'low'
                }:null
            },
            legend: {
                enabled: false
            },
            tooltip: {
                headerFormat:null,
                pointFormat: "{point.name}: {point.y}",
            },
            series: this.series,
        };

        Highcharts.chart(this.wrapperId, options);
}

  constructor() {
  }



    ngAfterViewInit(){
        this.showChart();
    }

}
