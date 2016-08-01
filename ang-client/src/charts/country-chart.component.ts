import {Component, OnInit} from '@angular/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass} from '@angular/common';

import {CHART_DIRECTIVES} from 'ng2-charts/ng2-charts';

import {CountryChart} from '../models/country-chart';

@Component({
  selector: 'country-chart',
  templateUrl: '/charts/country-chart.component.html',
  directives: [
    CHART_DIRECTIVES,
    NgClass,
    CORE_DIRECTIVES,
    FORM_DIRECTIVES
  ]
})
export class CountryChartComponent implements OnInit {
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels: string[] = ['2010', '2011', '2012', '2013', '2014', '2015', '2016'];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;

  public barChartData: any[] = [];

  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  ngOnInit() {

  }
}
