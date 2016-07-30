import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

import {Country} from './country';
import {CountryImports} from './country-imports';
import {CountryExports} from './country-exports';

@Injectable()
export class CountryService {
  countryUrl: 'http://localhost:3000/country/';
  constructor(private http: Http) {}

  getCountryData(country: number) {
    return this.http.get(this.countryUrl + country)
      .toPromise()
      .then(response => response.json() as Country)
      .catch(this.handleError)
  }

  private handleError(error: any) {
    console.error('An error occurred', error);

    return Promise.reject(error.message || error);
  }
}