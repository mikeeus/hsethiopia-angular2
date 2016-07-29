/// <reference path="../typings/index.d.ts"/>

import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES, RouterConfig} from '@angular/router';
import {Main} from './app/main';
import {HTTP_PROVIDERS} from '@angular/http';
import {HscodesComponent} from './hscodes/hscodes.component';

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
    path: '',
    component: Main
  },
  {
    path: 'hscodes',
    component: HscodesComponent
  }
];
