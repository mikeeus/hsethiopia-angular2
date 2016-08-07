import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {Hscode} from '../models/hscode';
import {HscodeSearchComponent} from '../search/hscode-search.component';
import {HscodeSearchService} from '../search/hscode-search.service';

@Component({
  selector: 'hscodes',
  templateUrl: '/hscodes/hscodes.component.html',
  directives: [
    HscodeSearchComponent
  ],
  providers: [
    HscodeSearchService
  ]
})
export class HscodesComponent implements OnInit {
  hscodes: Hscode[] = [];
  error: any;
  constructor(
    private router: Router,
    private hscodeSearch: HscodeSearchService
  ) {}

  ngOnInit(){
    
  }

  search(term: string) {
    this.hscodeSearch
        .search(term);
  }

  // gotoDetail(hscode: Hscode) {
  //   let link = ['hscode/', hscode.code];
  //   this.router.navigate(link);
  // }
}