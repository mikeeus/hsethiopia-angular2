import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Hscode} from '../models/hscode';

@Injectable()
export class TablesService {
  constructor(private http: Http) {}
  hscodesUrl: 'http://localhost:3000/hscodes/';

  getHscodesTablesData(code: number) {
    return this.http.get(this.hscodesUrl + code + '/tables')
      .toPromise()
      .then(response => response.json() as Hscode[])
      .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('An error occurred', error);

    return Promise.reject(error.message || error);
  }

}