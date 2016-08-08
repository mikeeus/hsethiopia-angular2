import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TopTenCharts} from '../models/top-ten-charts';

import {YearSummaryService} from './year-summary.service';
import {TopTenChartsService} from '../charts/top-ten-charts.service';
import {TopTenChartComponent} from '../charts/top-ten-chart.component';

@Component({
  selector: 'year',
  templateUrl: '/year/year.component.html',
  directives: [
    TopTenChartComponent
  ],
  providers:[
    TopTenChartsService,
    YearSummaryService
  ]
})
export class YearComponent implements OnInit {
  topTenCountriesImports: any[];
  topTenCountriesExports: any[];
  topTenHscodesImports: any[];
  topTenHscodesExports: any[];
  totalImports: number;
  totalExports: number;
  countriesImportedFrom: number;
  countriesExportedTo: number;

  constructor(
    private route: ActivatedRoute,
    private topTenChartsService: TopTenChartsService,
    private yearSummaryService: YearSummaryService
  ) {}
  
  sub: any;
  year: number;
  topTenCountriesImport: string = "topTenCountriesImport";
  topTenCountriesExport: string = "topTenCountriesExport";
  topTenHscodesImport: string = "topTenHscodesImport";
  topTenHscodesExport: string = "topTenHscodesExport";

  
  ngOnInit() {
    this.sub = this.route.params.subscribe( params => {
      if (params['year'] !== undefined) {
        this.year = +params['year'];
        this.topTenChartsService.getTopTenChartsData(this.year)
            .then(response => {
              this.topTenCountriesImports = response.topTenCountriesImport;
              this.topTenCountriesExports = response.topTenCountriesExport;
              this.topTenHscodesImports = response.topTenHscodesImport;
              this.topTenHscodesExports = response.topTenHscodesExport;
            });
        this.yearSummaryService.getYearData(this.year)
            .then(response => {
              this.totalImports = response.totalImports;
              this.totalExports = response.totalExports;
              this.countriesImportedFrom = response.countriesImportedFrom;
              this.countriesExportedTo = response.countriesExportedTo;
            })
      }
    });
  }
}