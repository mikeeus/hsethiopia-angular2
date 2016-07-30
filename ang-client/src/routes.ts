/// <reference path="../typings/index.d.ts"/>

import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES, RouterConfig} from '@angular/router';
import {Main} from './app/main';
import {HTTP_PROVIDERS} from '@angular/http';

import {HscodesComponent} from './hscodes/hscodes.component';
import {HscodeDetailComponent} from './hscodes/hscode-detail.component';
import {YearComponent} from './year/year.component';
import {CountryComponent} from './country/country.component';


@Component({
  selector: 'root',
  template: '<router-outlet></router-outlet>',
  directives: [ROUTER_DIRECTIVES],
  providers: [HTTP_PROVIDERS]
})
export class Root {
}

export const routes: RouterConfig = [
  {
    path: 'hscodes',
    component: HscodesComponent
  },
  {
    path: 'hscode/:id',
    component: HscodeDetailComponent
  },
  {
    path: 'year/:year',
    component: YearComponent
  },
  {
    path: 'country/:country',
    component: CountryComponent
  },
  {
    path: '',
    component: Main
  }
];
