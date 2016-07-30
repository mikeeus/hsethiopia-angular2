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
  annualCountryImports: AnnualCountryImports[];
  annualCountryExports: AnnualCountryExports[];
  annualHscodeImports: AnnualHscodeImports[];
  annualHscodeExports: AnnualHscodeExports[];
  sub: any;
  constructor(
    private yearService: YearService,
    private route: ActivatedRoute
  ) {}
  
  ngOnInit() {
    this.sub = this.route.params.subscribe( params => {
      if (params['year'] !== undefined) {
        let year = +params['year'];
        this.yearService.getYearData(year)
            .then(yearData => {
              this.annualCountryImports = yearData.annualCountryImports;
              this.annualCountryExports = yearData.annualCountryExports;
              this.annualHscodeImports = yearData.annualHscodeImports;
              this.annualHscodeExports = yearData.annualHscodeExports;
            });
      }
    });
  }
}