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
  selector: 'app-stacked-bars01',
  template: `<div [attr.id]="wrapperId"></div> `,
  styleUrls: []
})
export class StackedBars01Component implements AfterViewInit  {
    wrapperId=`pie${Math.floor(Math.random() * 1000)}Container`;
    @Input() series :object[]=[];

    /**
     * show the chart
     *
     */
    showChart(){

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
                title: {
                    text: null
                },
            },
            legend: {
                enabled: true
            },
            tooltip: {
                headerFormat:null,
                pointFormat: "{series.name}: {point.y}",
            },
            plotOptions: {
                series: {
                    stacking: "normal",
                    events: {
                        legendItemClick: function () {
                            return false;
                        }
                    }
                }
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
