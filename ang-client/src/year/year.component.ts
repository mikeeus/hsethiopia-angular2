import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TopTenCharts} from '../models/top-ten-charts';

import {TopTenChartsService} from '../charts/top-ten-charts.service';
import {TopTenChartComponent} from '../charts/top-ten-chart.component';

@Component({
  selector: 'year',
  templateUrl: '/year/year.component.html',
  directives: [
    TopTenChartComponent
  ],
  providers:[
    TopTenChartsService
  ]
})
export class YearComponent implements OnInit {
  topTenCountriesImports: any[];
  topTenCountriesExports: any[];
  topTenHscodesImports: any[];
  topTenHscodesExports: any[];

  constructor(
    private route: ActivatedRoute,
    private topTenChartsService: TopTenChartsService
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
      }
    });
  }
}