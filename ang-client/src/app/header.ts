import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {CORE_DIRECTIVES} from '@angular/common';
import {DROPDOWN_DIRECTIVES, CollapseDirective} from 'ng2-bootstrap/ng2-bootstrap';
import {HscodeSearchComponent} from '../search/hscode-search.component';
import {years} from './years';
import {countries} from './countries';

@Component({
  selector: 'Header',
  template: require('./header.html'),
  directives: [
    DROPDOWN_DIRECTIVES,
    CollapseDirective,
    HscodeSearchComponent
  ],
  styleUrls: [
    './app/header.scss'
  ]
})
export class Header {
  constructor(private router: Router) {}
  public isCollapsed: boolean = true;
  public disabled: boolean = false;
  public status: {isopen: boolean} = {isopen: false};
  public items: Array<string> = ['The first choice!',
  'Choice 2', 'And a third!'
  ];
  public countriesLinks: Array<string> = countries;
  public yearsLinks: Array<number> = years;

  public toggled(open: boolean): void {
  }

  public toggleDropdown($event: MouseEvent): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }

  gotoLink(path: string) {
    let link = [path];
    this.router.navigate(link);
  }

  gotoYear(year: number) {
    let link = ['year/', year];
    this.router.navigate(link);
  }

  gotoCountry(country: string) {
    let link = ['country/', country];
    this.router.navigate(link);
  }
}
