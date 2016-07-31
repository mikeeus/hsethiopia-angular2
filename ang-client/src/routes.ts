/// <reference path="../typings/index.d.ts"/>

import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES, RouterConfig} from '@angular/router';
import {Main} from './app/main';
import {HTTP_PROVIDERS} from '@angular/http';

import {HscodesComponent} from './hscodes/hscodes.component';
import {HscodeDetailComponent} from './hscodes/hscode-detail.component';
import {YearComponent} from './year/year.component';
import {CountryComponent} from './country/country.component';

import {Header} from './app/header';
import {Footer} from './app/footer';

@Component({
  selector: 'root',
  templateUrl: './root.html',
  styleUrls: ['./root.scss'],
  directives: [
    ROUTER_DIRECTIVES,
    Header,
    Footer
  ],
  providers: [HTTP_PROVIDERS]
})
export class Root {
}

export const routes: RouterConfig = [
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
    component: HscodesComponent
  }
];
