import { Component, OnInit } from '@angular/core';
import { DemoService } from '../../services/demo.service';
import * as html2canvas from "html2canvas";

declare var google: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private _demoService: DemoService) { }
  data1: any;
  elementId1: String;
  data3: any;
  elementId4: string;
  data2: any;
  elementId2: String;
  sampleData: any;
  data4: any;

test(){
  html2canvas(document.body).then((canvas) => {
    this.saveAs(canvas.toDataURL(), 'dashboard.png');
  });
}
 saveAs(uri, filename) {
  var link = document.createElement('a');
  if (typeof link.download === 'string') {
    link.href = uri;
    link.download = filename;
    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
  } else {
    window.open(uri);
  }
}

//first pie chart dispaly
piechart(){
  this._demoService.getData().subscribe(
    data => {
      this.data1 = data
      console.log(this.data1);
    }
  )
}

//Line chart dispaly using web API
lineChart(){
  this._demoService.getLineChart().subscribe(
    data => {
      this.data3 = data;
      this.sampleData = this.data3.query.results.channel.item.forecast;
      console.log(this.sampleData)
      var chartData = [];
  for (var i = 0, l = this.sampleData.length; i < l; i++) {
  chartData.push({ c: [ { v: this.sampleData[i].day,"f":null}, {v:parseInt(this.sampleData[i].high),"f":null},{v:parseInt(this.sampleData[i].high),"f":null},{v:parseInt(this.sampleData[i].low),"f":null},{v:parseInt(this.sampleData[i].low),"f":null},{v:parseInt(this.sampleData[i].code),"f":null},{ v: parseInt(this.sampleData[i].code),"f":null}]});
 
}
this.data4 ={
  "cols": [
    {"label": "Name", "type": "string"},
    {"label": "High", "type": "number"},
    {"type": "number", "role": "annotation"},
    {"label": "Low", "type": "number"},
    {"type": "number", "role": "annotation"},
    {"label": "Code", "type": "number"},
    {"type": "number", "role": "annotation"}
  ],
  "rows": chartData
};
console.log(this.data4)
return chartData;
    }
    
  )
}


  ngOnInit() : void {
    
    //Piechart1 Data & Config
    this.piechart();
    this.elementId1 = 'myPieChart1';
    //line chart Data & config
   this.lineChart();
    this.elementId4 = "myLinechart4" 
    this.data2 = {
      "cols": [
            {"id":"","label":"Topping","pattern":"","type":"string"},
            {"id":"","label":"Slices","pattern":"","type":"number"}
          ],
      "rows": [
            {"c":[{"v":"Satish","f":null},{"v":4,"f":null}]},
            {"c":[{"v":"Sai Goud","f":null},{"v":2,"f":null}]},
            {"c":[{"v":"Kiran","f":null},{"v":1,"f":null}]},
            {"c":[{"v":"Zolo","f":null},{"v":1,"f":null}]},
            {"c":[{"v":"Pepperoni","f":null},{"v":2,"f":null}]}
          ]
    }
    this.elementId2 ='myPieChart2';

}
}
