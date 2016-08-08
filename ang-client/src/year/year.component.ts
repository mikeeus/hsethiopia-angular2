import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {YearService} from './year.service';
import {Year} from './year';

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
  annualCountryImports: any[];
  annualCountryExports: any[];
  annualHscodeImports: any[];
  annualHscodeExports: any[];
  sub: any;
  year: number;
  topTenCountriesImport: string = "topTenCountriesImport";
  topTenCountriesExport: string = "topTenCountriesExport";
  topTenHscodesImport: string = "topTenHscodesImport";
  topTenHscodesExport: string = "topTenHscodesExport";

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
              this.annualCountryImports = yearData.topTenCountriesImports;
              this.annualCountryExports = yearData.topTenCountriesExports;
              this.annualHscodeImports = yearData.topTenHscodesImports;
              this.annualHscodeExports = yearData.topTenHscodesExports;
            });
      }
    });
  }
}