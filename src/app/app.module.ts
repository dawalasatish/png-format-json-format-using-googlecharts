import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PieChartComponent } from './components/dashboard/pie-chart/pie-chart.component';
import { GooglePieChartsService } from './services/google-pie-chart.service';
import { GoogleLineChartService } from './services/google-line-chart.service';
import { DemoService } from './services/demo.service';
import { LineChartComponent } from './components/dashboard/line-chart/line-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PieChartComponent,
    LineChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [GooglePieChartsService,GoogleLineChartService,DemoService],
  bootstrap: [AppComponent]
})
export class AppModule { }

