import { Injectable } from '@angular/core';
declare var google: any;

@Injectable()
export class GoogleBaseChartsService {

  constructor() {
    google.charts.load('current',{'packages':['corechart']});
   }
   protected buildChart(data: any, chartFunc: any, options: any) : void {
    var func = (chartFunc, options) => {
      var datatable = new google.visualization.DataTable(data);

      chartFunc().draw(datatable, options);
    };   
    var callback = () => func(chartFunc, options);
    google.charts.setOnLoadCallback(callback);
  }
  
}
