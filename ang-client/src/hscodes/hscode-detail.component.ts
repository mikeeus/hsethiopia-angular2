import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {Hscode} from '../models/hscode';
import {HscodeService} from './hscode.service';
import {HscodeChartComponent} from '../charts/hscode-chart.component';

@Component({
  selector: 'hscode-detail',
  templateUrl: '/hscodes/hscode-detail.component.html',
  directives: [
    HscodeChartComponent
  ],
  providers: [
    HscodeService
  ]
})
export class HscodeDetailComponent implements OnInit {
  @Input() hscode: Hscode;
  sub: any;  
  constructor(
    private hscodeService: HscodeService,
    private route: ActivatedRoute
  ){}

  ngOnInit(){
    this.sub = this.route.params.subscribe(params => {
      if (params['code'] !== undefined) {
        let code = +params['code'];
        this.hscodeService.getHscode(code)
            .then(hscode => this.hscode = hscode);
      }
    });
  }
}