/// <reference path="../typings/index.d.ts"/>

import 'es6-shim';
import 'reflect-metadata';
import 'zone.js/dist/zone';
import 'bootstrap/dist/css/bootstrap.css';
import 'chart.js';
import "./rxjs-extension";
import {bootstrap} from '@angular/platform-browser-dynamic';
// import './rxjs-operators';
import './index.scss';

import {provideRouter} from '@angular/router';
import {enableProdMode} from '@angular/core';
import {routes, Root} from './routes';

declare var process: any;
if (process.env.NODE_ENV === 'production') {
  enableProdMode();
}

bootstrap(Root, [
  provideRouter(routes)
]);
