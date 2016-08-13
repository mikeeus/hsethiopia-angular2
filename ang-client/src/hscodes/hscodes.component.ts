import {Component, OnInit} from '@angular/core';

import {AnnualChartComponent} from '../charts/annual-chart.component';

@Component({
  selector: 'hscodes',
  templateUrl: '/hscodes/hscodes.component.html',
  directives: [
    AnnualChartComponent
  ]
})
export class HscodesComponent implements OnInit {
  chartType = "homepage";
  constructor() {}

  ngOnInit(){
    
  }

}