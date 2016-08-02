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
export class AnnualChartComponent implements OnInit {
  constructor(
    private topTenChartsService: TopTenChartsService,
    private route: ActivatedRoute
  ) {}
  sub: any;
  @Input() chartType: string;
  
  public barChartOptions: any = chartOptions;
  public barChartLabels: string[] = years;
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;
  public barChartData: any[] = [
    {data: [0], label: "Imports"},
    {data: [0], label: "Exports"}
  ];

  // public chartClicked(e: any):void {
  //   console.log(e);
  // }
  // public chartHovered(e: any): void {
  //   console.log(e);
  // }

  ngOnInit() {
   //  this.sub = this.route.params.subscribe(params => {
   //    if (params['code'] && params['code'] !== undefined) {
   //      let code = +params['code'];
   //      this.topTenChartsService.getHscodeChartData(code)
   //          .then(response => {
   //            this.barChartData = response;
   //            // console.log(response);
   //           });
   //    } else if (params['country'] && params['country'] !== undefined) {
   //      let country = params['country'];
   //      this.topTenChartsService.getCountryChartData(country)
   //          .then(response => {
   //            this.barChartData = response;
   //            // console.log(response);
   //           });
   //    }
   // });
  }

}