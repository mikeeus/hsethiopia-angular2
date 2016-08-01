import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

import {AnnualChart} from '../models/annual-chart';


@Injectable()
export class HscodeChartService {
  constructor(private http: Http) {}
// events

  getChartData(hscode: string) {
    return this.http.get('http://localhost:3000/charts/hscode/' + hscode)
      .toPromise()
      .then(response => response.json() as AnnualChart)
      .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('An error occurred', error);

    return Promise.reject(error.message || error);
  }
}