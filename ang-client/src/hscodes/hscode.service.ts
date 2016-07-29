import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import {Hscode} from './hscode';

@Injectable()
export class HscodeService {
  private hscodesUrl = 'http://localhost:3000/hscodes';
  constructor(private http: Http) {}

  getHscodes() {
    return this.http.get(this.hscodesUrl)
      .toPromise()
      .then(response => response.json() as Hscode[])
      .catch(this.handleError);
  }

  getHscode(id: number) {
    return this.getHscodes()
      .then(hscodes => hscodes.find(hscode => hscode.id === id));
  }

  private handleError(error: any) {
    console.error('An error occurred', error);

    return Promise.reject(error.message || error);
  }

}
