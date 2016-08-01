import {Component, OnInit} from '@angular/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass} from '@angular/common';
import {ActivatedRoute} from '@angular/router';

import {CHART_DIRECTIVES} from 'ng2-charts/ng2-charts';

import {CountryChartService} from './country-chart.service';
import {CountryChart} from '../models/country-chart';

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
    responsive: false
  };
  public barChartLabels: string[] = ['2010', '2011', '2012', '2013', '2014', '2015', '2016'];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;

  public barChartData: any[] = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: "Imports"},
    {data: [28, 48, 40, 19, 86, 27, 90], label: "Exports"}
  ];

  public chartClicked(e:any):void {
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
            .then(countryChartData => this.populateChartData(countryChartData));
      }

   });
  }

  populateChartData(countryChart: CountryChart) {
    let labels = this.barChartLabels;
    let _countryChartData: Array<any> = new Array(2);

    _countryChartData[0] = {data: new Array(labels.length), labels: "Imports"};
    _countryChartData[1] = {data: new Array(labels.length), labels: "Exports"};

    for (let i = 0; i < labels.length; i++){
      _countryChartData[0].data[i] = countryChart.countryAnnualImports[labels[i]];
    }
    for (let j = 0; j < labels.length; j++){
      _countryChartData[1].data[j] = countryChart.countryAnnualExports[labels[j]];
    }

    this.barChartData = _countryChartData;
  }
}
