import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

import {TopTenCharts} from '../models/top-ten-charts';
// import {ChartData} from '../models/charts-data';
// import {AnnualChart} from '../models/annual-chart';
// import {years} from './years';

@Injectable()
export class TopTenChartsService {
  constructor(private http: Http) {}
  topTenChartsUrl = 'api/charts/year/';

  getTopTenChartsData(year: number) {
    return this.http.get(this.topTenChartsUrl + year)
      .toPromise()
      .then(response => 
        response.json() as TopTenCharts
        // return this.populateChartData(response.json() as TopTenCharts);
      )
      .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('An error occurred', error);

    return Promise.reject(error.message || error);
  }
}
