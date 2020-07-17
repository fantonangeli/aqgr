import { Component, Input, AfterViewInit, OnChanges } from '@angular/core';
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

export class BaseChartRender01Component  implements AfterViewInit, OnChanges {
    wrapperId=`chart${Math.floor(Math.random() * 1000)}Container`;
    options:any;

    @Input() series :object[]=[];
    @Input() height:number=null;
    @Input() fontStyleItalic:boolean=false;
    @Input() xAxisTitle :string;
    @Input() yAxisTitle :string;

     /**
      * title to show in the exportation (img/pdf)
      * @type {string}
      */
    @Input() exportTitle: string="";

    private _viewInitialized=false;

    /**
     * https://api.highcharts.com/highcharts/legend.enabled
     */
    @Input() legendEnabled :boolean=true;

     /**
      * Unit to show in the tooltip
      * @type {string}
      */
    @Input() unit:string="";

    /**
     * show the chart
     *
     */
    showChart(){
        let options: any = {
            title: {
                text: null
            },
            xAxis: {
            },
            yAxis: {
            },
            exporting: {
                chartOptions:{
                    title: {
                        text: this.exportTitle
                    },
                    subtitle:{
                        y:30 //this position better the subtitle in donut01 
                    }
                },
                buttons: {
                    contextButton: {
                        menuItems: ['downloadPDF', 'downloadPNG']
                    }
                }
            },
            legend: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            ...this.options,
        };

        options.yAxis.labels=(options.yAxis.labels || {});
        options.yAxis.labels.style=(options.yAxis.labels.style || {});
        options.xAxis.labels=(options.xAxis.labels || {});
        options.xAxis.labels.style=(options.xAxis.labels.style || {});
        options.yAxis.labels=options.xAxis.labels.style={
            fontStyle:(this.fontStyleItalic)?"italic":""
        };

        Highcharts.chart(this.wrapperId, options);
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
