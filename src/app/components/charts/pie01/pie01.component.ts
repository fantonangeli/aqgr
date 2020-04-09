import { Component, OnInit, Input } from '@angular/core';
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
  templateUrl: './pie01.component.html',
  styleUrls: ['./pie01.component.scss']
})
export class Pie01Component implements OnInit {
    @Input() series :object[]=[];

    /**
     * show the chart
     *
     */
    showChart(){
        let options: any = {
            chart: {
                type: "pie",
                height:"500px",
            },
            title: {
                text: "Proportion of primary farmed type entered"
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
                pointFormat: "<span style='color:{point.color}'>●</span> {point.name}: <b>{point.y}</b><br/>",
            },
            plotOptions: {
                pie: {
                    dataLabels: {
                        enabled: true,
                        format: "{point.name} {point.y}",
                    },
                    showInLegend: true
                }
            },
            series: this.series,
        };

        Highcharts.chart('pie01Container', options);
}

  constructor() {
  }



    ngOnInit(){
        this.showChart();
    }

}
