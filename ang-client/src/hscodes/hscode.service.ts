import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

import {Hscode} from '../models/hscode';

@Injectable()
export class HscodeService {
  private hscodesUrl = 'http://localhost:3000/api/hscodes';
  private hscodesChartUrl = 'http://localhost:3000/charts/api/hscode/';
  constructor(private http: Http) {}

  getHscodes() {
    return this.http.get(this.hscodesUrl)
      .toPromise()
      .then(response => response.json() as Hscode[])
      .catch(this.handleError);
  }

  getHscode(code: number) {
    return this.http.get(this.hscodesUrl + '/' + code )
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('An error occurred', error);

    return Promise.reject(error.message || error);
  }

}
