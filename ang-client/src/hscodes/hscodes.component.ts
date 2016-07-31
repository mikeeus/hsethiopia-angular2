import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {Hscode} from './hscode';
import {HscodeService} from './hscode.service';

import {SummaryChartComponent} from './../charts/summary-chart.component';

@Component({
  selector: 'hscodes',
  templateUrl: '/hscodes/hscodes.component.html',
  directives: [
      SummaryChartComponent
  ],
  providers: [
    HscodeService
  ]
})
export class HscodesComponent implements OnInit {
  hscodes: Hscode[];
  error: any;
  constructor(
    private hscodeService: HscodeService,
    private router: Router
  ) {}

  getHscodes() {
    this.hscodeService
        .getHscodes()
        .then(hscodes => this.hscodes = hscodes)
        .catch(error => this.error = error);
  }

  ngOnInit(){
    this.getHscodes();
  }

  gotoDetail(hscode: Hscode) {
    let link = ['hscode/', hscode.id];
    this.router.navigate(link);
  }
}