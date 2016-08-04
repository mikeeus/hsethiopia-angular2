import {Component, Input, OnInit} from '@angular/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass, NgIf} from '@angular/common';
import {PAGINATION_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';
import {NG_TABLE_DIRECTIVES} from 'ng2-table/ng2-table';

import {Import} from '../models/import';

import {TablesService} from './tables.service';



@Component({
  selector: 'import-table',
  templateUrl: '/tables/hscode-table.component.html',
  directives: [NG_TABLE_DIRECTIVES, PAGINATION_DIRECTIVES, NgClass, NgIf, CORE_DIRECTIVES, FORM_DIRECTIVES],
  providers: [
    TablesService
  ]
})
export class HscodeTableComponent implements OnInit {
  @Input() code: number;
  @Input() type: string;

  public rows: Array<any>;

  public columns: Array<any> = [
    {title: 'Code', name: 'code', sort: 'asc'},
    {title: 'Description', name: 'description', sort: false}
  ];

  // Pagination
  public page: number = 1;
  public itemsPerPage: number = 10;
  public maxSize: number = 5;
  public numPages: number = 1;
  public length: number = 0;

  constructor(private tablesService: TablesService) {
    // this.length = this.data.length;
  }

  public config: any = {
    // paging: false,
    // sorting: {columns: this.columns},
    // filtering: {filterString: '', columnName: 'code'}
  };



  ngOnInit() {
    this.tablesService.getHscodesTablesData(this.code)
            .then(response => {
              this.rows = response.imports;
            });
    // this.onChangeTable(this.config);
  }


  // public changePage(page:any, data:Array<any> = this.data):Array<any> {
  //   console.log(page);
  //   let start = (page.page - 1) * page.itemsPerPage;
  //   let end = page.itemsPerPage > -1 ? (start + page.itemsPerPage) : data.length;
  //   return data.slice(start, end);
  // }

  // public changeSort(data:any, config:any):any {
  //   if (!config.sorting) {
  //     return data;
  //   }

  //   let columns = this.config.sorting.columns || [];
  //   let columnName:string = void 0;
  //   let sort:string = void 0;

  //   for (let i = 0; i < columns.length; i++) {
  //     if (columns[i].sort !== '') {
  //       columnName = columns[i].name;
  //       sort = columns[i].sort;
  //     }
  //   }

  //   if (!columnName) {
  //     return data;
  //   }

  //   // simple sorting
  //   return data.sort((previous:any, current:any) => {
  //     if (previous[columnName] > current[columnName]) {
  //       return sort === 'desc' ? -1 : 1;
  //     } else if (previous[columnName] < current[columnName]) {
  //       return sort === 'asc' ? -1 : 1;
  //     }
  //     return 0;
  //   });
  // }

  // public changeFilter(data:any, config:any):any {
  //   if (!config.filtering) {
  //     return data;
  //   }

  //   let filteredData:Array<any> = data.filter((item:any) =>
  //     item[config.filtering.columnName].match(this.config.filtering.filterString));

  //   return filteredData;
  // }

  // public onChangeTable(config:any, page:any = {page: this.page, itemsPerPage: this.itemsPerPage}):any {
  //   if (config.filtering) {
  //     Object.assign(this.config.filtering, config.filtering);
  //   }
  //   if (config.sorting) {
  //     Object.assign(this.config.sorting, config.sorting);
  //   }

    // let filteredData = this.changeFilter(this.data, this.config);
    // let sortedData = this.changeSort(filteredData, this.config);
    // this.rows = page && config.paging ? this.changePage(page, sortedData) : sortedData;
    // this.length = sortedData.length;
  // }
}