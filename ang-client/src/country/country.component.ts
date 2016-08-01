import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {CountryService} from './country.service';

import {CountryChart} from '../models/country-chart';
import {CountryAnnualImports} from '../models/country-annual-imports';
import {CountryAnnualExports} from '../models/country-annual-exports';

import {CountryChartComponent} from '../charts/country-chart.component';

@Component({
  selector: 'country',
  templateUrl: '/country/country.component.html',
  directives: [
    CountryChartComponent
  ],
  providers: [
    CountryService
  ]
})
export class CountryComponent implements OnInit {
  country: string;
  countryImports: CountryAnnualImports[];
  countryExports: CountryAnnualExports[];
  countryChart: CountryChart;

  sub: any;
  constructor(
    private countryService: CountryService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      if (params['country'] !== undefined) {
        this.country = params['country'];
        this.countryService.getCountryChartData(this.country)
            .then(countryChartData => {
              this.countryChart.countryAnnualImports = countryChartData.countryAnnualImports;
              this.countryChart.countryAnnualExports = countryChartData.countryAnnualExports
            });
      }
    });
  }
}