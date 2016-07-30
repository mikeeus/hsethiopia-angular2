import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {YearService} from './year.service';
import {Year} from './year';

@Component({
  selector: 'year',
  templateUrl: '/year/year.component.html',
  providers:[
    YearService
  ]
})
export class YearComponent implements OnInit {
  @Input() year: Year;
  sub: any;
  constructor(
    private yearService: YearService,
    private route: ActivatedRoute
  ) {}
  
  ngOnInit() {
    this.sub = this.route.params.subscribe( params => {
      if (params['year'] !== undefined) {
        let year = +params['year'];
        this.yearService.getYearData(year)
            .then(year => this.year = year)
      }
    });
  }
}