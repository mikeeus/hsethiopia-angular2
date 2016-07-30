import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

import {Country} from './country';

@Injectable()
export class CountryService {
  countryUrl: 'http://localhost:3000/country/';
  constructor(private http: Http) {}

  getCountryData(country: string) {
    return this.http.get('http://localhost:3000/country/' + country)
      .toPromise()
      .then(response => response.json() as Country)
      .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('An error occurred', error);

    return Promise.reject(error.message || error);
  }
}
