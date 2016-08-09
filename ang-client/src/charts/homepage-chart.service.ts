import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

import {HomepageChart} from '../models/homepage-chart';
import {years} from './years';

@Injectable()
export class HomepageChartService {
  constructor(private http: Http) {}
  homepageChartUrl = 'http://localhost:3000/api/charts/homepage';

  getChartData() {
    return this.http.get(this.homepageChartUrl)
      .toPromise()
      .then(response => response.json() as HomepageChart)
      .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('An error occurred', error);

    return Promise.reject(error.message || error);
  }
}
