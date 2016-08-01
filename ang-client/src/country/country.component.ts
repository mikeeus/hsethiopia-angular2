import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {CountryService} from './country.service';

import {CountryChart} from '../models/country-chart';

import {CountryChartComponent} from '../charts/country-chart.component';

@Component({
  selector: 'country',
  templateUrl: '/country/country.component.html',
  directives: [
    CountryChartComponent
  ],
  providers: [
    CountryService,
    // CountryChartService
  ]
})
export class CountryComponent implements OnInit {
  country: string;
  countryChart: CountryChart;

  sub: any;
  constructor(
    private countryService: CountryService,
    private route: ActivatedRoute
    // private countryChartService: CountryChartService
  ) {}

  ngOnInit() {
    // this.sub = this.route.params.subscribe(params => {
    //   if (params['country'] !== undefined) {
    //     this.country = params['country'];
    //     this.countryChartService.getCountryChartData(this.country)
    //         .then(countryChartData => {
    //           this.countryChart = countryChartData;
    //         })
    //         .then(this.countryChartComponent.populateChart(this.countryChart));
    //   }
    // });
  }
}