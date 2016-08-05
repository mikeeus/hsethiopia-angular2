import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {Hscode} from '../models/hscode';
import {HscodeSearchComponent} from '../search/hscode-search.component';
// import {HscodeService} from './hscode.service';

@Component({
  selector: 'hscodes',
  templateUrl: '/hscodes/hscodes.component.html',
  directives: [
    HscodeSearchComponent
  ],
  providers: [
  ]
})
export class HscodesComponent implements OnInit {
  hscodes: Hscode[];
  error: any;
  constructor(
    private router: Router
  ) {}

  ngOnInit(){
    
  }

  // gotoDetail(hscode: Hscode) {
  //   let link = ['hscode/', hscode.code];
  //   this.router.navigate(link);
  // }
}