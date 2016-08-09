import {Component, OnInit} from '@angular/core';

import {HomepageChartService} from './homepage-chart.component';

import {HomepageChart} from '../models/homepage-chart';
import {chartOptions} from './chart-options';
import {years} from './years';

@Component({
  selector: 'homepage-chart',
  templateUrl: './charts/homepage-chart.component.html',
  providers: [
    HomepageChartService
  ]
})
export class HomepageChartComponent {
  homepageChart = HomepageChart;
  constructor(private homepageChartService: HomepageChartService) {}

    sub: any;
    public barChartOptions: any = chartOptions;
    public barChartLabels: string[] = years;
    public barChartType: string = 'bar';
    public barChartLegend: boolean = true;
    public barChartColors: Array<any> = [
      {backgroundColor: "#ffeb3b"},
      {backgroundColor: "#8bc34a"}
    ];
    public barChartData: any[] = [
      {data: [0], label: "Imports"},
      {data: [0], label: "Exports"}
    ];

    public chartClicked(e: any):void {
      // console.log(e);
    }
    public chartHovered(e: any): void {
      // console.log(e);
    }

  ngOnInit() {
    this.homepageChartService.getChartData()
        .then(response => this.homepageChart = response);
  }
}