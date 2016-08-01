import {Component} from '@angular/core';
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
export class CountryChartComponent {
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels: string[] = ['2010', '2011', '2012', '2013', '2014', '2015', '2016'];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;

  public barChartData: any[] = [];

  // events
  public populateChart(countryChart: CountryChart): void {
    let labels = this.barChartLabels
    let _countryChartData: Array<any> = new Array(2);
    _countryChartData[0] = {data: new Array(labels.length), labels: "Imports"};
    for (let i = 0; i < labels.length; i++){
      _countryChartData[0].data[i] = countryChart[labels[i]];
    }
    for (let j = 0; j < labels.length; j++){
      _countryChartData[1].data[j] = countryChart[labels[j]];
    }
    this.barChartData = _countryChartData;
  }

  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }
}
