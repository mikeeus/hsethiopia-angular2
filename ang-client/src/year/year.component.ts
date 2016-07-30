import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {YearService} from './year.service';
import {Year} from './year';
import {AnnualCountryImports} from './annual-country-imports';
import {AnnualCountryExports} from './annual-country-exports';
import {AnnualHscodeImports} from './annual-hscode-imports';
import {AnnualHscodeExports} from './annual-hscode-exports';

@Component({
  selector: 'year',
  templateUrl: '/year/year.component.html',
  providers:[
    YearService
  ]
})
export class YearComponent implements OnInit {
  year: number;
  countryImports: AnnualCountryImports[];
  countryExports: AnnualCountryExports[];
  hscodeImports: AnnualHscodeImports[];
  hscodeExports: AnnualHscodeExports[];
  sub: any;
  constructor(
    private yearService: YearService,
    private route: ActivatedRoute
  ) {}
  
  ngOnInit() {
    this.sub = this.route.params.subscribe( params => {
      if (params['year'] !== undefined) {
        this.year = +params['year'];
        this.yearService.getYearData(this.year)
            .then(yearData => {
              this.countryImports = yearData.annualCountryImports;
              this.countryExports = yearData.annualCountryExports;
              this.hscodeImports = yearData.annualHscodeImports;
              this.hscodeExports = yearData.annualHscodeExports;
            });
      }
    });
  }
}