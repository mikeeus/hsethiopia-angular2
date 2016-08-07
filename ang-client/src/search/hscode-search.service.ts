import {Injectable}     from '@angular/core';
import {Http, Response} from '@angular/http';
import {Hscode}           from '../models/hscode';
@Injectable()
export class HscodeSearchService {
  constructor(private http: Http) {}
  search(term: string) {
    return this.http
               .get(`http://localhost:3000/api/hscodes/search/${term}`)
               .map((r: Response) => r.json().data as Hscode[]);
  }
}