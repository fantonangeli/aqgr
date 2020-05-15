import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-use-chart04',
  template: `
<div id="highcharts-d114443a-13f6-4d57-baec-b5aa9ea57d62"> </div>
  `,
  styles: []
})
export class UseChart04Component implements OnInit {

    /* TODO: use data from service */
  constructor() { }

  ngOnInit() {
                var options :any= {
                    "title":
                    {
                        "text": ""
                    },
                    "subtitle":
                    {
                        "text": ""
                    },
                    "exporting":
                    {
                        "enabled": false
                    },
                    "chart":
                    {
                        "type": "column",
                        "polar": false,
                        "inverted": true
                    },
                    "series": [{
            "data": [
                ["Laminaria japonica", 10000000],
                ["Penaeus vannamei", 3500000],
                ["Claris spp", 100000],
                ["Cyprinus carpio", 100000],
                ["Hypophthalmichthys molitrix", 95000],
                ["Salmo salar", 94000],
                ["Oncorhynchus mykiss", 93000],
                ["Pangasius spp", 90000],
                ["Oreochromis niloticus", 85000],
                ["Oncorhynchus kisutch", 75000]
            ],
            "name": "Production",
            "turboThreshold": 0,
            "marker": {}
        }],
                    "plotOptions":
                    {
                        "series":
                        {
                            "animation": false
                        }
                    },
                    "data":
                    {
                        "csv": "\"Column 1\";\"Production\"\n\"Laminaria japonica\";10000000\n\"Penaeus vannamei\";3500000\n\"Claris spp\";100000\n\"Cyprinus carpio\";100000\n\"Hypophthalmichthys molitrix\";95000\n\"Salmo salar\";94000\n\"Oncorhynchus mykiss\";93000\n\"Pangasius spp\";90000\n\"Oreochromis niloticus\";85000\n\"Oncorhynchus kisutch\";75000",
                        "googleSpreadsheetKey": false,
                        "googleSpreadsheetWorksheet": false
                    },
                    "yAxis": [
                    {
                        "title":
                        {
                            "text": ""
                        },
                        "labels":
                        {}
                    }],
                    "credits":
                    {
                        "enabled": false
                    },
                    "lang":
                    {},
                    "xAxis": [
                    {
                        "title":
                        {},
                type: 'category'
                    }],
                    "legend":
                    {
                        "enabled": false
                    }
                };
                /*
                // Sample of extending options:
                Highcharts.merge(true, options, {
                    chart: {
                        backgroundColor: "#bada55"
                    },
                    plotOptions: {
                        series: {
                            cursor: "pointer",
                            events: {
                                click: function(event) {
                                    alert(this.name + " clicked\n" +
                                          "Alt: " + event.altKey + "\n" +
                                          "Control: " + event.ctrlKey + "\n" +
                                          "Shift: " + event.shiftKey + "\n");
                                }
                            }
                        }
                    }
                });
                */
                new Highcharts.Chart(
                    "highcharts-d114443a-13f6-4d57-baec-b5aa9ea57d62",
                    options);
  }

}
