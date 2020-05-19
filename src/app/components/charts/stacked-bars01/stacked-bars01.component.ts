import { Component, Input, AfterViewInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import Exporting from 'highcharts/modules/exporting';

declare var require: any;
let Boost = require('highcharts/modules/boost');
let noData = require('highcharts/modules/no-data-to-display');
let More = require('highcharts/highcharts-more');

Boost(Highcharts);
noData(Highcharts);
More(Highcharts);
noData(Highcharts);
Exporting(Highcharts);

@Component({
  selector: 'app-stacked-bars01',
  template: `<div [attr.id]="wrapperId"></div> `,
  styleUrls: []
})
export class StackedBars01Component implements AfterViewInit  {
    wrapperId=`pie${Math.floor(Math.random() * 1000)}Container`;
    @Input() series :object[]=[];
    @Input() xAxisTitle :string;


    /**
     * show the chart
     *
     */
    showChart(){

        let options: any = {
            exporting: {
                buttons: {
                    contextButton: {
                        menuItems: ['downloadPDF']
                    }
                }
            },
            chart: {
                type: "bar",
            },
            title: {
                text: null
            },
            xAxis: {
                type: 'category',
            },
            yAxis: {
                title: (this.xAxisTitle)?{
                    text: this.xAxisTitle,
                    align: 'low'
                }:null
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
            credits: {
                enabled: false
            },
        };

        Highcharts.chart(this.wrapperId, options);
}

  constructor() {
  }



    ngAfterViewInit(){
        this.showChart();
    }

}
