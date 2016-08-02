import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

import {AnnualChart} from '../models/annual-chart';
import {years} from './years';


@Injectable()
export class HscodeChartService {
  constructor(private http: Http) {}
// events

  getChartData(code: number) {
    return this.http.get('http://localhost:3000/charts/hscode/' + code)
      .toPromise()
      .then(response => {
        return this.populateChartData(response.json() as AnnualChart);
      })
      .catch(this.handleError);
  }


  populateChartData(chart: AnnualChart) {
    let labels = years;
    let _chartData: Array<any> = new Array(2);

    _chartData[0] = {data: new Array(labels.length), label: "Imports"};
    _chartData[1] = {data: new Array(labels.length), label: "Exports"};

    for (let i = 0; i < labels.length; i++){
      _chartData[0].data[i] = chart.annualImports[labels[i]];
    }
    for (let j = 0; j < labels.length; j++){
      _chartData[1].data[j] = chart.annualExports[labels[j]];
    }

    return _chartData;
  }

  private handleError(error: any) {
    console.error('An error occurred', error);

    return Promise.reject(error.message || error);
  }
}