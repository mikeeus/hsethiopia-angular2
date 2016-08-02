import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

import {TopTenCharts} from '../models/top-ten-charts';
// import {AnnualChart} from '../models/annual-chart';
// import {years} from './years';

@Injectable()
export class TopTenChartsService {
  constructor(private http: Http) {}
  topTenChartsUrl = 'http://localhost:3000/charts/year/';

  getTopTenChartsData(year: number) {
    return this.http.get(this.topTenChartsUrl + year)
      .toPromise()
      .then(response => response.json() as TopTenCharts)
      .catch(this.handleError);
  }

  populateChartData(chart: TopTenCharts) {
    let length = 10;
    let _chartData: TopTenCharts = {
      topTenCountriesImport: {data: new Array(10), label: 'Countries by Import'},
      topTenCountriesExport: {data: new Array(10), label: 'Countries by Export'},
      topTenHscodesImport: {data: new Array(10), label: 'Hscodes by Import'},
      topTenHscodesExport: {data: new Array(10), label: 'Hscodes by Export'},
    };

    for (let i = 0; i < 10; i++){
      _chartData.topTenCountriesImport.data[i] = chart.topTenCountriesImport[i][0];
      _chartData.topTenCountriesExport.data[i] = chart.topTenCountriesExport[i][0];
      _chartData.topTenHscodesImport.data[i] = chart.topTenHscodesImport[i][0];
      _chartData.topTenHscodesExport.data[i] = chart.topTenHscodesExport[i][0];
    }

    return _chartData;
  }

  private handleError(error: any) {
    console.error('An error occurred', error);

    return Promise.reject(error.message || error);
  }
}
