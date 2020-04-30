import { Component, Input, AfterViewInit, OnChanges } from '@angular/core';
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
  selector: 'app-pie01',
  template: `<div [attr.id]="wrapperId"></div> `,
  styleUrls: []
})
export class Pie01Component implements AfterViewInit, OnChanges  {
    wrapperId=`pie${Math.floor(Math.random() * 1000)}Container`;

    private _viewInitialized=false;
    
    @Input() series :object[]=[];
    @Input() enableDataLabels :boolean=true;
    @Input() height:number=null;
    @Input() innerSize:string="30%";
    
    /**
     * https://api.highcharts.com/highcharts/legend.enabled
     */
    @Input() legendEnabled :boolean=true;


    // TODO: hide the link to highcharts
    

    /**
     * show the chart
     *
     */
    showChart(){
        let options: any = {
            chart: {
                type: "pie",
                height:this.height
            },
            title: {
                text: null
            },
            xAxis: {
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
                // TODO: show the percentage in tooltip
                headerFormat: "",
                pointFormat: "<span style='color:{point.color}'>●</span> {point.name}: <b>{point.y}</b><br/>",
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

        options.series[0].innerSize=this.innerSize;

        Highcharts.chart(this.wrapperId, options);
}

  constructor() {
  }


    ngAfterViewInit(){
        this._viewInitialized=true;
        this.showChart();
    }

    ngOnChanges(){
        if(!this._viewInitialized) return;

        this.showChart();
    }

}
