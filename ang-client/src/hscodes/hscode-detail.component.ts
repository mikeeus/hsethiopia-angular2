import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {Hscode} from '../models/hscode';
import {Import} from '../models/import';

import {HscodeService} from './hscode.service';
import {TablesService} from '../tables/tables.service';

import {AnnualChartComponent} from '../charts/annual-chart.component';
import {TaxRatesComponent} from './tax-rates.component';
import {RelatedCodesComponent} from './related-codes.component';
import {ImportTableComponent} from '../tables/import-table.component';

@Component({
  selector: 'hscode-detail',
  templateUrl: '/hscodes/hscode-detail.component.html',
  directives: [
    TaxRatesComponent,
    RelatedCodesComponent,
    AnnualChartComponent,
    ImportTableComponent
  ],
  providers: [
    HscodeService,
    TablesService
  ]
})
export class HscodeDetailComponent implements OnInit {
  hscode: Hscode;
  relatedCodes: Hscode[];
  importsTable: Import[];
  sub: any;  
  constructor(
    private hscodeService: HscodeService,
    private tablesService: TablesService,
    private route: ActivatedRoute
  ){}

  ngOnInit(){
    this.sub = this.route.params.subscribe(params => {
      if (params['code'] !== undefined) {
        let code = +params['code'];
        this.hscodeService.getHscode(code)
            .then(response => {
              this.hscode = response.hscode;
              this.relatedCodes = response.relatedCodes;
            });
        this.tablesService.getHscodesTablesData(code)
            .then(response => {
              this.importsTable = response.imports;
            });
      }
    });
  }
}