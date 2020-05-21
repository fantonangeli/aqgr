import { Component, Input } from '@angular/core';
import {BaseChartRender01Component} from '../base-chart-render01/base-chart-render01.component';

@Component({
  selector: 'app-stacked-columns01',
  template: `<div [attr.id]="wrapperId"></div> `,
  styleUrls: []
})
export class StackedColumns01Component extends BaseChartRender01Component {
    @Input() xAxisTitle :string;


    /**
     * show the chart
     *
     */
    showChart(){
        this.options= {
            chart: {
                type: "column",
            },
            xAxis: {
                type: 'category',
            },
            yAxis: {
                title: (this.xAxisTitle)?{
                    text: this.xAxisTitle,
                    align: 'low'
                }:null,
                reversedStacks: false
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

        super.showChart();
}


    constructor() {
        super();
    }

}
