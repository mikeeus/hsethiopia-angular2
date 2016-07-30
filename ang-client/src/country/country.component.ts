import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {Country} from './country';
import {CountryImports} from './country-imports';
import {CountryExports} from './country-exports';
import {CountryService} from './country.service';

@Component({
  selector: 'country',
  templateUrl: '/country/country.component.html',
  providers: [
    CountryService
  ]
})
export class CountryComponent implements OnInit {
  country: string;
  countryImports: CountryImports;
  countryExports: CountryExports;
  sub: any;
  constructor(
    private countryService: CountryService,
    private route: Router
  ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      if (params['country'] !== undefined) {
        this.country = params['country'];
        this.countryService.getCountryData(this.country)
            .then(countryData => {
              this.countryImports = countryData.countryImports;
              this.countryExports = countryData.countryExports
            });
      }
    });
  }
}