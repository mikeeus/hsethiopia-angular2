/// <reference path="../typings/index.d.ts"/>

import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES, RouterConfig} from '@angular/router';
import {HTTP_PROVIDERS} from '@angular/http';

import {HscodesComponent} from './hscodes/hscodes.component';
import {HscodeDetailComponent} from './hscodes/hscode-detail.component';
import {YearComponent} from './year/year.component';
import {CountryComponent} from './country/country.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AuthGuard} from './auth/auth-guard.service';

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
  providers: [HTTP_PROVIDERS, AuthGuard]
})
export class Root {
}

export const routes: RouterConfig = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'hscode/:code',
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
  },
  {
    path: '**',
    redirectTo: '',
    component: HscodesComponent
  }
];
