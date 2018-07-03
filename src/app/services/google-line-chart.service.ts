import { Injectable } from '@angular/core';
import { GoogleBaseChartsService } from './google-base-charts.service';

declare var google: any;

@Injectable()
export class GoogleLineChartService extends GoogleBaseChartsService {

  constructor() { super(); };
  public BuildLineChart(elementId: string, data: any) : void {
    var chartFunc = () =>{ return new google.visualization.LineChart(document.getElementById(<string>elementId)); };
    var options = {
      title: 'Company Performance',
      curveType: 'function',
      legend: { position: 'bottom' },
      pointSize: 5
    };
    this.buildChart(data, chartFunc, options);
  }
}
