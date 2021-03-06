import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class YearSummaryService {
  constructor(private http: Http) {}
  yearUrl  = 'http://localhost:3000/api/year/';

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
