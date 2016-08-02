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

    for (let x = 0; x < 10; x++){
      _chartData.topTenCountriesImport.data[x] = chart.topTenCountriesImport[x][0];
      _chartData.topTenCountriesExport.data[x] = chart.topTenCountriesExport[x][0];
      _chartData.topTenHscodesImport.data[x] = chart.topTenHscodesImport[x][0];
      _chartData.topTenHscodesExport.data[x] = chart.topTenHscodesExport[x][0];
    }

    for (let a = 0; a < 10; a ++) {
      _chartData[0] = {data: new Array(), label: l};
    }
      


    _chartData[1] = {data: new Array(length), label: "Countries by Exports"};
    _chartData[2] = {data: new Array(length), label: "Hscodes by Imports"};
    _chartData[3] = {data: new Array(length), label: "Hscodes by Exports"};

    for (let i = 0; i < length; i++){
      _chartData[0].data[i] = chart.topTenCountriesImport[i][0];
    }
    for (let j = 0; j < length; j++){
      _chartData[1].data[j] = chart.topTenCountriesExport[j][0];
    }
    for (let k = 0; k < length; k++){
      _chartData[0].data[k] = chart.topTenHscodesImport[k][0];
    }
    for (let l = 0; l < length; l++){
      _chartData[1].data[l] = chart.topTenHscodesExport[l][0];
    }

    return _chartData;
  }

  private handleError(error: any) {
    console.error('An error occurred', error);

    return Promise.reject(error.message || error);
  }
}
