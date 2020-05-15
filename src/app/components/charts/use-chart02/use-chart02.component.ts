import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-use-chart02',
  template: `
<div id="highcharts-d9dc0d15-a2eb-43d9-b25b-5c422eb371c6"></div>
  `,
  styles: []
})
export class UseChart02Component implements OnInit {

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
                        "text": " "
                    },
                    "exporting":
                    {
                        "enabled": false
                    },
                    "chart":
                    {
                        "type": "column",
                        "inverted": false,
                        "polar": false
                    },
                    "plotOptions":
                    {
                        "series":
                        {
                            "stacking": "normal",
                            "dataLabels":
                            {
                                "enabled": false
                            },
                            "animation": false
                        }
                    },
                    "series": [
                        {
                            "name":"Native",
                            "data":[
                                {
                                    "name": "Africa",
                                    "y": 140,
                                },
                                {
                                    "name": "Europe",
                                    "y": 125,
                                },
                                {
                                    "name": "Asia",
                                    "y": 225,
                                },
                                {
                                    "name": "Latin America",
                                    "y": 160,
                                },
                                {
                                    "name": "North America",
                                    "y": 125,
                                },
                                {
                                    "name": "Oceania",
                                    "y": 110,
                                }
                            ]},{
                            "name":"Non-Native",
                            "data":[
                                {
                                    "name": "Africa",
                                    "y":25
                                },
                                {
                                    "name": "Europe",
                                    "y":30
                                },
                                {
                                    "name": "Asia",
                                    "y":50
                                },
                                {
                                    "name": "Latin America",
                                    "y":30
                                },
                                {
                                    "name": "North America",
                                    "y":25
                                },
                                {
                                    "name": "Oceania",
                                    "y":25
                                }
                            ]}
],
                    "data":
                    {
                        "csv": "\"Name\";\"Native\";\"Non-native\"\n\"Africa\";140;25\n\"Europe\";125;30\n\"Asia\";225;50\n\"Latin America\";160;30\n\"North America\";125;25\n\"Oceania\";110;25",
                        "googleSpreadsheetKey": false,
                        "googleSpreadsheetWorksheet": false
                    },
                    "yAxis": [
                    {
                        "visible": true,
                        "showEmpty": true,
                        "title":
                        {
                            "text": ""
                        },
                        "labels":
                        {
                            "format": "{value}"
                        },
                        "opposite": false,
                        "ordinal": false,
                        "reversed": false,
                        "reversedStacks": false
                    }],
                    "pane":
                    {
                        "background": []
                    },
                    "responsive":
                    {
                        "rules": []
                    },
                    "credits":
                    {
                        "enabled": false
                    },
                    "xAxis": [
                    {
                        "title":
                        {
                            "text": ""
                        },
                type: 'category'
                    }],
                    "legend":
                    {
                        "enabled": true
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
                    "highcharts-d9dc0d15-a2eb-43d9-b25b-5c422eb371c6",
                    options);
  }

}
