import {Component} from '@angular/core';
import {Header} from './header';
import {Title} from './title';
import {Footer} from './footer';

@Component({
  selector: 'App',
  template: require('./main.html'),
  directives: [Header, Title, Footer]
})
export class Main {}
