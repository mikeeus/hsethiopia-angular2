import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class TablesService {
  constructor(private http: Http) {}
  hscodesUrl: 'http://localhost:3000/hscodes/';

  getHscodesTablesData(code: number) {
    return this.http.get('http://localhost:3000/api/hscodes/' + code + '/tables')
      .toPromise()
      .then(response => {
        return response.json()
       })
      .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('An error occurred', error);

    return Promise.reject(error.message || error);
  }

}