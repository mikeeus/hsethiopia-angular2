import {Component, OnInit} from '@angular/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass} from '@angular/common';
import {ActivatedRoute} from '@angular/router';

import {CHART_DIRECTIVES} from 'ng2-charts/ng2-charts';

import {CountryChartService} from './country-chart.service';
import {CountryChart} from '../models/country-chart';

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
    responsive: true
    // Start from zero
  };
  public barChartLabels: string[] = years;
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;

  public barChartData: any[] = [
    {data: [0], label: "Imports"},
    {data: [0], label: "Exports"}
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

    _countryChartData[0] = {data: new Array(labels.length), label: "Imports"};
    _countryChartData[1] = {data: new Array(labels.length), label: "Exports"};

    for (let i = 0; i < labels.length; i++){
      _countryChartData[0].data[i] = countryChart.countryAnnualImports[labels[i]];
    }
    for (let j = 0; j < labels.length; j++){
      _countryChartData[1].data[j] = countryChart.countryAnnualExports[labels[j]];
    }

    this.barChartData = _countryChartData;
  }
}
