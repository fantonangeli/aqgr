import { Component, Input } from "@angular/core";
import { BaseChartRender01Component } from "../base-chart-render01/base-chart-render01.component";

@Component({
  selector: "app-stacked-columns01",
  template: `<div [attr.id]="wrapperId"></div> `,
  styleUrls: [],
})
export class StackedColumns01Component extends BaseChartRender01Component {
  /**
   * show the chart
   *
   */
  showChart() {
    this.options = {
      chart: {
        type: "column",
      },
      xAxis: {
        type: "category",
      },
      yAxis: {
        title: this.yAxisTitle
          ? {
              text: this.yAxisTitle,
            }
          : null,
        reversedStacks: false,
      },
      legend: {
        enabled: true,
      },
      tooltip: {
        headerFormat: null,
        pointFormat:
          "<span style='color:{point.color}'>●</span> {series.name}: <b>{point.y} " +
          this.unit +
          " ({point.percentage:.1f}%)</b><br/>",
      },
      plotOptions: {
        series: {
          stacking: "normal",
          events: {
            legendItemClick: () => (false),
          },
        },
      },
      series: this.series,
    };

    super.showChart();
  }

  /**
   * pointFormatter fn to used to show a point with children inside
   *
   * @returns {string} the html to show
   */
  pointWithChildrenFormatter = function () {
    let shortData = this.data || [];
    let ttext = "";
    const fullDataLength = shortData.length;

    if (fullDataLength > 10) {
        shortData = this.data.slice(0, 10);
    }

    ttext =
      `<b>${this.series.name}: ${this.y}</b><br />` +
      shortData.map((e) => {
        return `<br /><span class='bullet'>•</span> ${e.key}: ${e.value}`;
      });

    if (fullDataLength > 10) {
        ttext += "<br/>...";
    }

    return ttext;
  };

  constructor() {
    super();
  }
}
