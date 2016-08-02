import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

import {AnnualChart} from '../models/annual-chart';

@Injectable()
export class CountryChartService {
  constructor(private http: Http) {}

  getChartData(country: string) {
    return this.http.get('http://localhost:3000/charts/country/' + country)
      .toPromise()
      .then(response => response as AnnualChart)
      .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('An error occurred', error);

    return Promise.reject(error.message || error);
  }
}
