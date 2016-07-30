import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

import {Year} from './year';

@Injectable()
export class YearService {
  yearUrl: 'http://localhost:3000/year/';
  constructor(private http: Http) {}

  getYearData(year: number) {
    return this.http.get('http://localhost:3000/year/' + year)
      .toPromise()
      .then(response => response.json() as Year)
      .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('An error occurred', error);

    return Promise.reject(error.message || error);
  }
}