import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

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
    TablesService,
    ActivatedRoute
  ]
})
export class HscodeTablesComponent implements OnInit {
  // @Input() hscode: Hscode;
  code: number = 9011100;
  typeImport: string = 'import';
  importsTable: any[];
  exportsTable: any[];
  sub: any;

  constructor(
    private tablesService: TablesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.code = +params['code'];
      this.tablesService.getHscodesTablesData(this.code)
            .then(response => {
              this.importsTable = response.imports;
              this.exportsTable = response.exports;
            });
    });
  }
}