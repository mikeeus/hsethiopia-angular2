import {Component, OnInit} from '@angular/core';

import {AnnualChartComponent} from '../charts/annual-chart.component';

@Component({
  selector: 'hscodes',
  templateUrl: '/hscodes/hscodes.component.html',
  directives: [
    AnnualChartComponent
  ],
  providers: []
})
export class HscodesComponent implements OnInit {
  constructor() {}

  ngOnInit(){
    
  }

}