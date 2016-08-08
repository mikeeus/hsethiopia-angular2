import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
import '../rxjs-extension';

import { HscodeSearchService } from './hscode-search.service';
import { Hscode } from '../models/hscode';

@Component({
  selector: 'hscode-search',
  templateUrl: '/search/hscode-search.component.html',
  styleUrls: ['./search/hscode-search.scss'],
  providers: [HscodeSearchService]
})
export class HscodeSearchComponent implements OnInit {
  constructor(
    private router: Router,
    private hscodeSearchService: HscodeSearchService
  ) {}

  searchSubject = new Subject<string>();
  hscodes: Observable<Hscode[]> = Observable.of<Hscode[]>([]);

  // Push a search term into the observable stream.
  search(term: string) { 
    if (term.length > 3) {
      this.searchSubject.next(term); 
    }
  }

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