import { Component, OnInit, Input, OnChanges} from '@angular/core';
import { GooglePieChartsService } from './../../../services/google-pie-chart.service'; 


declare var google: any;

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit,OnChanges {

      @Input() data: any;
      @Input() elementId: string;
      constructor(private _pieChartService: GooglePieChartsService) { }
      
      ngOnInit(): void {
          //this._pieChartService.BuildPieChart(this.elementId, this.data);
        }
      ngOnChanges(changes){
          this._pieChartService.BuildPieChart(this.elementId, this.data);
      }
}
