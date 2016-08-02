import {Component, OnInit} from '@angular/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass} from '@angular/common';
import {ActivatedRoute} from '@angular/router';

import {CHART_DIRECTIVES} from 'ng2-charts/ng2-charts';

import {HscodeChartService} from './hscode-chart.service';
import {AnnualChart} from '../models/annual-chart';

import {years} from './years';

@Component({
  selector: 'hscode-chart',
  templateUrl: '/charts/annual-chart.component.html',
  directives: [
    CHART_DIRECTIVES,
    NgClass,
    CORE_DIRECTIVES,
    FORM_DIRECTIVES
  ],
  providers: [
    HscodeChartService
  ]
})
export class HscodeChartComponent implements OnInit {
  constructor(
    private hscodeChartService: HscodeChartService,
    private route: ActivatedRoute
  ) {}
  sub: any;
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero:true,
          userCallback: function (value){
            if (value < 1){
              return "$" + value.toFixed(1);
            } else if (value < 10000){
              return "$" + value;
            } else if (value < 1000000){
              return "$" + (value/1000)+",000";
            } else if (value < 1000000000){
              return "$" + value/1000000 + " Million";
            } else {
              return "$" + value/1000000000 + " Billion";
            }
          }
        }
      }],
      xAxes: [{
        ticks: {
          userCallback: function(value) {

          if ( value.length > 15 ){
            return value.slice(0,13) + "...";
          }
          return value;
          }
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
      if (params['code'] !== undefined) {
        let code = +params['code'];
        this.hscodeChartService.getChartData(code)
            .then(response => {
              this.barChartData = response;
              // console.log(response);
             });
      }
   });
  }

}
