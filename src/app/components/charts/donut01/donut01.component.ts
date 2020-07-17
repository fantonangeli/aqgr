import { Component, Input} from '@angular/core';
import * as Highcharts from 'highcharts';
import {BaseChartRender01Component} from '../base-chart-render01/base-chart-render01.component';

@Component({
  selector: 'app-donut01',
  template: `<div [attr.id]="wrapperId"></div> `,
  styles: []
})
export class Donut01Component extends BaseChartRender01Component {
    @Input() enableDataLabels :boolean=true;
    @Input() innerSize:string="60%";


     /**
      * template string for the total. eg:"Total number of policies reported globally {total}" 
      * @type {string}
      */
    @Input() totalTemplate:string="";



    /**
     * show the chart
     *
     */
    showChart(){
            // tried this options but when export the total is in one line and overlaps
            // title: {
            //     text: this.totalTemplate.replace("{total}", this.series[0]['total']),
            //     verticalAlign: "middle",
            //     y: 0,
            //     widthAdjust: -44,
            //     floating: false,
            //     useHTML: true,
            //     style: {
            //         fontSize: 9,
            //         maxWidth: "100px",
            //         whiteSpace: "inherit",
            //         display: "block",
            //         textAlign: "center"
            //     }
            // },

        // let title=this.totalTemplate.replace("{total}", this.series[0]['total']);

        // this.exportTitle=title;

        this.options= {
            subtitle: {
                text:this.totalTemplate.replace("{total}", this.series[0]['total']),
                verticalAlign: "middle",
                y:10,
                floating: false,
                useHTML:false,
                style: {
                    fontSize: 10,
                    textAlign: "center"
                }
            },
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
                    showInLegend: true,
                    center:["50%","50%"]
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
