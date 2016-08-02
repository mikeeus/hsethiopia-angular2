import {Component, OnInit} from '@angular/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass} from '@angular/common';
import {ActivatedRoute} from '@angular/router';

import {CHART_DIRECTIVES} from 'ng2-charts/ng2-charts';

import {CountryChartService} from './country-chart.service';
import {AnnualChart} from '../models/annual-chart';

import {years} from './years';

@Component({
  selector: 'country-chart',
  templateUrl: '/charts/country-chart.component.html',
  directives: [
    CHART_DIRECTIVES,
    NgClass,
    CORE_DIRECTIVES,
    FORM_DIRECTIVES
  ],
  providers: [
    CountryChartService
  ]
})
export class CountryChartComponent implements OnInit {
  constructor(
    private countryChartService: CountryChartService,
    private route: ActivatedRoute
  ) {}
  sub: any;
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
    scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
  };
  public barChartLabels: string[] = years;
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;
  public barChartData: any[] = [
    {data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], label: "Imports"},
    {data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], label: "Exports"}
  ];

  public chartClicked(e: any):void {
    console.log(e);
  }
  public chartHovered(e: any): void {
    console.log(e);
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      if (params['country'] !== undefined) {
        let country = params['country'];
        this.countryChartService.getChartData(country)
            .then(response => {
              this.barChartData = response;
              // console.log(response);
             });
      }
   });
  }

}
