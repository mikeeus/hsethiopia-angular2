import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

import {Year} from './year';

@Injectable()
export class YearService {
  constructor(private http: Http) {}
  yearUrl  = 'api/charts/year/';

  getYearData(year: number) {
    return this.http.get(this.yearUrl + year + '/summary')
      .toPromise()
      .then(response => {
          return response.json();
        }
      )
      .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('An error occurred', error);

    return Promise.reject(error.message || error);
  }
}
