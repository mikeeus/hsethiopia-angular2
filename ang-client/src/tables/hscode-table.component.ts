import {Component, Input, OnInit} from '@angular/core';
import {PAGINATION_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';

import {Import} from '../models/import';

import {TablesService} from './tables.service';



@Component({
  selector: 'hscode-table',
  templateUrl: '/tables/hscode-table.component.html',
  directives: [],
  providers: [
    TablesService
  ]
})
export class HscodeTableComponent implements OnInit {
  @Input() code: number;
  @Input() type: string;

  public rows: Array<any>;

  public columns: Array<any>;

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
    sorting: {columns: this.columns}
    // paging: false,
    // filtering: {filterString: '', columnName: 'code'}
  };

  ngOnInit() {
    this.tablesService.getHscodesTablesData(this.code)
        .then(response => {
          if (this.type === "import") {
            this.rows = response.imports;
          } else if (this.type === "export") {
            this.rows = response.exports;
          }
        });

    // Populate columns based on table type
    if (this.type === 'import') {
      this.columns = [
        {title: 'Year', name: 'year', sort: 'desc'},
        {title: 'Country of Origin', name: 'country_origin', sort: ''},
        {title: 'Country of Consignment', name: 'country_consignment', sort: ''},
        {title: 'CIF ($)', name: 'cif_usd', sort: ''},
        {title: 'CIF (ETB)', name: 'cif_etb', sort: ''}
      ]
    } else if (this.type === 'export') {
      this.columns = [
        {title: 'Year', name: 'year', sort: ''},
        {title: 'Destination', name: 'destination', sort: ''},
        {title: 'FOB ($)', name: 'fob_etb', sort: ''},
        {title: 'FOB (ETB)', name: 'fob_etb', sort: ''}
      ]
    }
    this.initialSort(this.rows, this.config);
    // this.onChangeTable(this.config);
  }

  // Grouping function
  // groupByYear() {

  // }

  initialSort(data: any, config: any) {
    if (!this.config.sorting) {
      return data;
    }

    let columns = this.config.sorting.columns || [];
    let columnName:string = void 0;
    let sort:string = void 0;

    for (let i = 0; i < columns.length; i++) {
      if (columns[i].sort !== '') {
        columnName = columns[i].name;
        sort = columns[i].sort;
      }
    }

    if (!columnName) {
      return data;
    }

    return data.sort((previous: any, current: any) => {
      if (previous[columnName] > current[columnName]) {
        return sort === 'desc' ? -1 : 1;
      } else if (previous[columnName] < current[columnName]) {
        return sort === 'asc' ? -1 : 1;
      }
      return 0;
    });

  }
  

  // public changePage(page:any, data:Array<any> = this.data):Array<any> {
  //   console.log(page);
  //   let start = (page.page - 1) * page.itemsPerPage;
  //   let end = page.itemsPerPage > -1 ? (start + page.itemsPerPage) : data.length;
  //   return data.slice(start, end);
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