import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Http} from '@angular/http';

import {Hscode} from '../models/hscode';
import {Import} from '../models/import';
import {Export} from '../models/export';

import {TablesService} from './tables.service';

@Component({
  selector: 'hscode-tables',
  templateUrl: '/tables/hscode-tables.component.html'
})
export class HscodeTablesComponent implements OnInit {
  @Input() hscode: Hscode;
  importsTable: Import[];
  exportsTable: Export[];
  constructor(
    private http: Http,
    private route: ActivatedRoute,
    private tablesService: TablesService
  ) {}

  ngOnInit() {
    this.tablesService.getHscodesTablesData(this.hscode.code)
        .then(response => {
          this.importsTable = response.imports;
          this.exportsTable = response.exports;
        })
  }
}