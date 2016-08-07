import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
// Observable class extensions
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

import { Subject }           from 'rxjs/Subject';
import { HscodeSearchService } from './hscode-search.service';
import { Hscode } from '../models/hscode';

@Component({
  selector: 'hscode-search',
  templateUrl: '/search/hscode-search.component.html',
  providers: [HscodeSearchService]
})
export class HscodeSearchComponent implements OnInit {
  constructor(
    private router: Router,
    private hscodeSearchService: HscodeSearchService
  ) {}

  hscodes: Observable<Hscode[]>;
  searchSubject = new Subject<string>();

  // Push a search term into the observable stream.
  search(term: string) { this.searchSubject.next(term); }

  ngOnInit() {
    this.hscodes = this.searchSubject
      .asObservable()           // cast as Observable
      .debounceTime(300)        // wait for 300ms pause in events
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term ? 
          this.hscodeSearchService.search(term) : Observable.of<Hscode[]>([]))
      .catch(error => {
        // Todo: real error handling
        console.log(error);
        return Observable.of<Hscode[]>([]);
      });
  }

  gotoDetail(hscode: Hscode) {
    let link = ['hscode/', hscode.code];
    this.router.navigate(link);
  }
}