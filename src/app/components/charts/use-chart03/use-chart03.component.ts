import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-use-chart03',
  template: `
<div id="highcharts-5bf1869c-b2c3-4fcd-b2fc-00e29b94c83f">
</div>
  `,
  styles: []
})
export class UseChart03Component implements OnInit {

    /* TODO: use data from service */
  constructor() { }

 ngOnInit() {
                 var options:any = {
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
                            "data":[
 {
   "name": "Caribbean and Latin America",
   "y": 39.07
 },
 {
   "name": "Asia",
   "y": 17.27
 },
 {
   "name": "Europe",
   "y": 12.62
 },
 {
   "name": "Africa",
   "y": 10.96
 },
 {
   "name": "North America",
   "y": 7.75
 },
 {
   "name": "Oceania",
   "y": 3.31
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
                    "highcharts-5bf1869c-b2c3-4fcd-b2fc-00e29b94c83f",
                    options);
  }

}
