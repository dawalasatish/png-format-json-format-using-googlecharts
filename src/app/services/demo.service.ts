import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DemoService {

  constructor(private http:HttpClient) { }

  getData() {
    return this.http.get('./../assets/data.json');
  }
  getLineChart(){
    return this.http.get('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22pune%2C%20mh%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys')
  }
}
