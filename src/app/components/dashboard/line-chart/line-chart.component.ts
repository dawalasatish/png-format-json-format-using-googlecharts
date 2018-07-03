import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { GoogleLineChartService } from '../../../services/google-line-chart.service';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit, OnChanges {

  @Input() linedata: any;
  @Input() elementId: string;

  constructor(private _lineChartService: GoogleLineChartService) { }

  ngOnInit() {
  }
  ngOnChanges(changes){
    this._lineChartService.BuildLineChart(this.elementId, this.linedata);
  }

}
