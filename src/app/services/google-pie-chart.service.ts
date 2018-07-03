import { GoogleBaseChartsService } from './google-base-charts.service';
import { Injectable } from '@angular/core';

declare var google: any;

@Injectable()

export class GooglePieChartsService extends GoogleBaseChartsService {

  constructor() { super(); };


  public BuildPieChart(elementId: string, data: any) : void {
    var chartFunc = () => { return new google.visualization.PieChart(document.getElementById(<string>elementId)); };
    var options = {
      title: 'This is  PIE Chart',
      pieHole: 5
    };

  

    this.buildChart(data, chartFunc, options);
  }
}

