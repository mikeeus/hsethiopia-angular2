import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

import {Year} from './year';
import {AnnualCountryImports} from './annual-country-imports';
import {AnnualCountryExports} from './annual-country-exports';
import {AnnualHscodeImports} from './annual-hscode-imports';
import {AnnualHscodeExports} from './annual-hscode-exports';

@Injectable()
export class YearService {
  constructor(private http: Http) {}

  getYearData(year: number) {
    return this.http.get('http://localhost:3000/year/' + year)
      .toPromise()
      .then(response => response.json() as Year)
      .catch(this.handleError);
  }

  // getData(year: number) {
  //   return this.getYearData(year)
  //     .then(yearData => {
  //       yearData.annualCountryImports as AnnualCountryImports;
  //       yearData.annualCountryExports as AnnualCountryExports;
  //       yearData.annualHscodeImports as AnnualHscodeImports;
  //       yearData.annualHscodeExports as AnnualHscodeExports;
  //     });
  // }

  private handleError(error: any) {
    console.error('An error occurred', error);

    return Promise.reject(error.message || error);
  }
}