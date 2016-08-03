import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Http} from '@angular/http';

import {Hscode} from '../models/hscode';
import {Import} from '../models/import';
import {Export} from '../models/export';

import {TablesService} from './tables.service';

@Component({
  selector: 'hscode-tables',
  templateUrl: './hscode-table.component.html'
})
export class HscodeTablesComponent implements OnInit {
  sub: any;
  importsTable: Import[];
  exportsTable: Export[];
  constructor(
    private http: Http,
    private route: ActivatedRoute,
    private tablesService: TablesService
  ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let code = +params['code'];
      this.tablesService.getHscodesTablesData(code)
          .then(response => {
            this.importsTable = response.imports;
            this.exportsTable = response.exports;
          })
    });
  }
}