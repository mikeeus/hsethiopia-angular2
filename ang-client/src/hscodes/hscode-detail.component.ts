import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {Hscode} from '../models/hscode';

import {HscodeService} from './hscode.service';

import {AnnualChartComponent} from '../charts/annual-chart.component';
import {TaxRatesComponent} from './tax-rates.component';
import {RelatedCodesComponent} from './related-codes.component';
import {HscodeTableComponent} from '../tables/hscode-table.component';

@Component({
  selector: 'hscode-detail',
  templateUrl: '/hscodes/hscode-detail.component.html',
  directives: [
    TaxRatesComponent,
    RelatedCodesComponent,
    AnnualChartComponent,
    HscodeTableComponent
  ],
  providers: [
    HscodeService
  ]
})
export class HscodeDetailComponent implements OnInit {
  hscode: Hscode;
  relatedCodes: Hscode[];

  // Tables
  code: number;
  typeImport: string = 'import';
  typeExport: string = 'export';

  sub: any;  
  constructor(
    private hscodeService: HscodeService,
    private route: ActivatedRoute
  ){}

  ngOnInit(){
    this.sub = this.route.params.subscribe(params => {
      if (params['code'] !== undefined) {
        this.code = +params['code'];
        this.hscodeService.getHscode(this.code)
            .then(response => {
              this.hscode = response.hscode;
              this.relatedCodes = response.relatedCodes;
            });
      }
    });
  }
}