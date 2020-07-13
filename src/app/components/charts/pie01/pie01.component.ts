import { Component, Input} from '@angular/core';
import * as Highcharts from 'highcharts';
import {BaseChartRender01Component} from '../base-chart-render01/base-chart-render01.component';

@Component({
  selector: 'app-pie01',
  template: `<div [attr.id]="wrapperId"></div> `,
  styleUrls: []
})
export class Pie01Component extends BaseChartRender01Component {
    @Input() enableDataLabels :boolean=true;
    @Input() innerSize:string="30%";






    /**
     * show the chart
     *
     */
    showChart(){
        this.options= {
            chart: {
                type: "pie",
                height:this.height,
            },
            yAxis: {
                min: 0,
                title: {
                    text: ""
                },
                stackLabels: {
                    enabled: true,
                    style: {
                        fontWeight: "bold",
                        fontSize:'16px',
                        color: ( // theme
                            Highcharts.defaultOptions.title.style &&
                            Highcharts.defaultOptions.title.style.color
                        ) || "gray"
                    }
                }
            },
            legend: {
                align: "right",
                x: -30,
                enabled: this.legendEnabled,
                verticalAlign: "top",
                y: 25,
                floating: false,
                backgroundColor:
                Highcharts.defaultOptions.legend.backgroundColor || "white",
                borderColor: "#CCC",
                borderWidth: 1,
                shadow: false
            },
            tooltip: {
                headerFormat: "",
                pointFormat: "<span style='color:{point.color}'>●</span> {point.name}: <b>{point.y} "+this.unit+" ({point.percentage:.1f}%)</b><br/>",
            },
            plotOptions: {
                pie: {
                    dataLabels: {
                        enabled: this.enableDataLabels,
                        format: "{point.name}",
                    },
                    showInLegend: true
                },
                series: {
                    point: {
                        events: {
                            legendItemClick: function () {
                                return false;
                            }
                        }
                    }
                }
            },
            series: this.series,
        };

        this.options.series[0].innerSize=this.innerSize;

        super.showChart();
    }

    constructor() {
        super();
    }



}
