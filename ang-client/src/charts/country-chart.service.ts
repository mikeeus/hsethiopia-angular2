import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

import {CountryChart} from '../models/country-chart';


@Injectable()

export class CountryChartService {
// events
  public populateChart(countryChart: CountryChart): void {
    let labels = this.barChartLabels
    let _countryChartData: Array<any> = new Array(2);

    _countryChartData[0] = {data: new Array(labels.length), labels: "Imports"};
    _countryChartData[0] = {data: new Array(labels.length), labels: "Exports"};

    for (let i = 0; i < labels.length; i++){
      _countryChartData[0].data[i] = countryChart[labels[i]];
    }
    for (let j = 0; j < labels.length; j++){
      _countryChartData[1].data[j] = countryChart[labels[j]];
    }

    this.barChartData = _countryChartData;
  }
}