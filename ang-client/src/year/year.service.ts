import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

import {Year} from './year';

@Injectable()
export class YearService {
  constructor(private http: Http) {}
  yearUrl  = 'api/charts/year/';

  getYearData(year: number) {
    return this.http.get(this.yearUrl + year)
      .toPromise()
      .then(response => 
        response.json() as Year
      )
      .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('An error occurred', error);

    return Promise.reject(error.message || error);
  }
}
