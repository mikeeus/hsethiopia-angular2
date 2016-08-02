import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {YearService} from './year.service';
import {Year} from './year';
import {AnnualCountryImports} from './annual-country-imports';
import {AnnualCountryExports} from './annual-country-exports';
import {AnnualHscodeImports} from './annual-hscode-imports';
import {AnnualHscodeExports} from './annual-hscode-exports';

import {TopTenChartsService} from '../charts/top-ten-charts.service';
import {TopTenChartComponent} from '../charts/top-ten-chart.component';

@Component({
  selector: 'year',
  templateUrl: '/year/year.component.html',
  directives: [
    TopTenChartComponent
  ],
  providers:[
    YearService,
    TopTenChartsService
  ]
})
export class YearComponent implements OnInit {
  annualCountryImports: AnnualCountryImports[];
  annualCountryExports: AnnualCountryExports[];
  annualHscodeImports: AnnualHscodeImports[];
  annualHscodeExports: AnnualHscodeExports[];
  sub: any;
  year: number;
  countryImport: string = "topTenCountriesImport";
  countryExport: string = "topTenCountriesExport";
  hscodeImport: string = "topTenHscodesImport";
  hscodeExport: string = "topTenHscodesExport";

  constructor(
    private route: ActivatedRoute,
    private yearService: YearService,
    private topTenChartsService: TopTenChartsService
  ) {}
  
  ngOnInit() {
    this.sub = this.route.params.subscribe( params => {
      if (params['year'] !== undefined) {
        this.year = +params['year'];
        this.yearService.getYearData(this.year)
            .then(yearData => {
              this.annualCountryImports = yearData.annualCountryImports;
              this.annualCountryExports = yearData.annualCountryExports;
              this.annualHscodeImports = yearData.annualHscodeImports;
              this.annualHscodeExports = yearData.annualHscodeExports;
            });
        this.topTenChartsService.getTopTenChartsData(this.year)
            .then(response => console.log(response));
      }
    });
  }
}