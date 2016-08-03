import {Component, Input, OnInit} from '@angular/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass} from '@angular/common';
import {ActivatedRoute} from '@angular/router';

import {CHART_DIRECTIVES} from 'ng2-charts/ng2-charts';

import {TopTenChartsService} from './top-ten-charts.service';

import {TopTenCharts} from '../models/top-ten-charts';

import {years} from './years';
import {chartOptions} from './chart-options';

@Component({
  selector: 'top-ten-chart',
  templateUrl: '/charts/top-ten-chart.component.html',
  directives: [
    CHART_DIRECTIVES,
    NgClass,
    CORE_DIRECTIVES,
    FORM_DIRECTIVES
  ],
  providers: [
    TopTenChartsService
  ]
})
export class TopTenChartComponent implements OnInit {
  constructor(
    private topTenChartsService: TopTenChartsService,
    private route: ActivatedRoute
  ) {}
  sub: any;
  @Input() chartType: string;

  public barChartOptions: any = chartOptions;
  public barChartLabels: string[] = [
    'Belgium',
    'China'
  ];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;
  public barChartData: any[] = [
    {data: [1, 5], label: "Imports"}
  ];

  public chartClicked(e: any):void {
    console.log(e);
  }
  public chartHovered(e: any): void {
    console.log(e);
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      if (params['year'] && params['year'] !== undefined) {
        let year = +params['year'];
        this.topTenChartsService.getTopTenChartsData(year)
            .then(response => {
              this.formatChartData(response[this.chartType], this.chartType);
            });
      }
   });
  }

  formatChartData(chartData: any[], type: string) {
    let _chartData = {
      data: new Array(chartData.length),
      labels: new Array(chartData.length)
    }
    for (let i = 0; i < chartData.length; i++) {

      _chartData.data[i] = +chartData[i][0];

      if (type == 'topTenCountriesImport' || type == 'topTenCountriesExport') {

        _chartData.labels[i] = chartData[i][1];

      } else if (type == 'topTenHscodesImport'  || type == 'topTenHscodesExport') {

        _chartData.labels[i] = chartData[i][1][0];
        
      }

      this.barChartLabels = _chartData.labels;
      this.barChartData[0].data = _chartData.data;
    }

  }

}
