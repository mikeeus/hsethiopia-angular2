import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

import {Country} from '../models/country';
import {AnnualChart} from '../models/annual-chart';


@Injectable()
export class CountryService {
  countryUrl: 'http://localhost:3000/api/country/';
  countryChartUrl: 'http://localhost:3000/api/charts/country/';
  constructor(private http: Http) {}

  // getCountryData(country: string) {
  //   return this.http.get(this.countryUrl + country)
  //     .toPromise()
  //     .then(response => response.json() as Country)
  //     .catch(this.handleError);
  // }

  // getCountryChartData(country: string) {
  //   return this.http.get('http://localhost:3000/charts/country/' + country)
  //     .toPromise()
  //     .then(response => response.json() as AnnualChart)
  //     .catch(this.handleError);
  // }

  private handleError(error: any) {
    console.error('An error occurred', error);

    return Promise.reject(error.message || error);
  }
}
