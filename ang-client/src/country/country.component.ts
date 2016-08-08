import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {CountryService} from './country.service';

import {AnnualChart} from '../models/annual-chart';

import {AnnualChartComponent} from '../charts/annual-chart.component';


@Component({
  selector: 'country',
  templateUrl: '/country/country.component.html',
  directives: [
    AnnualChartComponent
  ],
  providers: [
    // CountryService
  ]
})
export class CountryComponent implements OnInit {
  country: string;
  countryChart: AnnualChart;

  sub: any;
  constructor(
    // private countryService: CountryService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      if (params['country'] !== undefined) {
        this.country = params['country'];
      }
    });
  }
}