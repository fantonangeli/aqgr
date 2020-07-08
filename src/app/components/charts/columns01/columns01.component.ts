import { Component, Input } from '@angular/core';
import {BaseChartRender01Component} from '../base-chart-render01/base-chart-render01.component';

@Component({
  selector: 'app-columns01',
  template: `<div [attr.id]="wrapperId"></div> `,
  styleUrls: []
})
export class Columns01Component extends BaseChartRender01Component {


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
                title: (this.xAxisTitle)?{
                    text: this.xAxisTitle,
                }:null
            },
            yAxis: {
                title: (this.yAxisTitle)?{
                    text: this.yAxisTitle,
                }:null
            },
            tooltip: {
                headerFormat:null,
                pointFormat: "{point.name}: {point.y}",
            },
            plotOptions: {
                series: {
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
