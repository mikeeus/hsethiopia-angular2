import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {CountryService} from './country.service';
import {Country} from './country';
import {CountryAnnualImports} from './country-annual-imports';
import {CountryAnnualExports} from './country-annual-exports';

@Component({
  selector: 'country',
  templateUrl: '/country/country.component.html',
  providers: [
    CountryService
  ]
})
export class CountryComponent implements OnInit {
  country: string;
  countryImports: CountryAnnualImports[];
  countryExports: CountryAnnualExports[];
  sub: any;
  constructor(
    private countryService: CountryService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      if (params['country'] !== undefined) {
        this.country = params['country'];
        this.countryService.getCountryData(this.country)
            .then(countryData => {
              this.countryImports = countryData.countryAnnualImports;
              this.countryExports = countryData.countryAnnualExports
            });
      }
    });
  }
}