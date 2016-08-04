import {Component, Input, OnInit} from '@angular/core';

import {Hscode} from '../models/hscode';
import {Import} from '../models/import';
import {Export} from '../models/export';

import {TablesService} from './tables.service';
import {ImportTableComponent} from './import-table.component';

@Component({
  selector: 'hscode-tables',
  templateUrl: '/tables/hscode-tables.component.html',
  directives: [
    ImportTableComponent
  ],
  providers:[
    TablesService
  ]
})
export class HscodeTablesComponent implements OnInit {
  // @Input() hscode: Hscode;
  // importsTable: Import[];
  // exportsTable: Export[];

  constructor(
    private tablesService: TablesService
  ) {}

  ngOnInit() {
    // this.tablesService.getHscodesTablesData(this.hscode.code)
    //     .then(response => {
    //       this.importsTable = response.imports;
    //       this.exportsTable = response.exports;
    //     })
  }
}