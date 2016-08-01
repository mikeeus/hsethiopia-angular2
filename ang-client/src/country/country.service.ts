import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

import {Country} from './country';
import {CountryChart} from './country-chart';


@Injectable()
export class CountryService {
  countryUrl: 'http://localhost:3000/country/';
  countryChartUrl: 'http://localhost:3000/charts/country/';
  constructor(private http: Http) {}

  getCountryData(country: string) {
    return this.http.get(this.countryUrl + country)
      .toPromise()
      .then(response => response.json() as Country)
      .catch(this.handleError);
  }

  getCountryChartData(country: string) {
    return this.http.get(this.countryChartUrl + country)
      .toPromise()
      .then(response => response.json() as CountryChart)
      .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('An error occurred', error);

    return Promise.reject(error.message || error);
  }
}
