import { Component, Input } from '@angular/core';
import {BaseChartRender01Component} from '../base-chart-render01/base-chart-render01.component';

@Component({
  selector: 'app-bars01',
  template: `<div [attr.id]="wrapperId"></div> `,
  styleUrls: []
})
export class Bars01Component extends BaseChartRender01Component {


    /**
     * show the chart
     *
     */
    showChart(){
        this.options= {
            chart: {
                type: "bar",
            },
            xAxis: {
                type: 'category',
                title: (this.yAxisTitle)?{
                    text: this.yAxisTitle,
                }:null,
            },
            yAxis: {
                title: (this.xAxisTitle)?{
                    text: this.xAxisTitle,
                }:null,
                // tickInterval:5 //disabled to have millions format (M)
            },
            tooltip: {
                headerFormat:null,
                pointFormat: "{point.name}: {point.y}",
            },
            series: this.series,
        };

        super.showChart();
}


    constructor() {
        super();
    }

}
