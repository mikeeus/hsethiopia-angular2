import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
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

  hscodes: Observable<Hscode[]>
  searchSubject = new Subject<string>();

  ngOnInit() {
    this.hscodes = this.searchSubject
      .asObservable()           // cast as Observable
      .debounceTime(300)        // wait for 300ms pause in events
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time
        // return the http search observable
        ? this.hscodeSearchService.search(term)
        // or the observable of empty hscodes if no search term
        : Observable.of<Hero[]>([]))
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