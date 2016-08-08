import {Component, OnInit} from '@angular/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass} from '@angular/common';
import {ActivatedRoute} from '@angular/router';

import {CHART_DIRECTIVES} from 'ng2-charts/ng2-charts';

import {AnnualChartService} from './annual-chart.service';

import {AnnualChart} from '../models/annual-chart';

import {years} from './years';
import {chartOptions} from './chart-options';

@Component({
  selector: 'annual-chart',
  templateUrl: '/charts/annual-chart.component.html',
  directives: [
    CHART_DIRECTIVES,
    NgClass,
    CORE_DIRECTIVES,
    FORM_DIRECTIVES
  ],
  providers: [
    AnnualChartService
  ]
})
export class AnnualChartComponent implements OnInit {
  constructor(
    private annualChartService: AnnualChartService,
    private route: ActivatedRoute
  ) {}
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
    this.sub = this.route.params.subscribe(params => {
      if (params['code'] && params['code'] !== undefined) {
        let code = +params['code'];
        this.annualChartService.getHscodeChartData(code)
            .then(response => {
              this.barChartData = response;
              // console.log(response);
             });
      } else if (params['country'] && params['country'] !== undefined) {
        let country = params['country'];
        this.annualChartService.getCountryChartData(country)
            .then(response => {
              this.barChartData = response;
              // console.log(response);
             });
      }
   });
  }

}
