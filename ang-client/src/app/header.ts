import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {CORE_DIRECTIVES} from '@angular/common';
import {DROPDOWN_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';

@Component({
  selector: 'Header',
  template: require('./header.html'),
  directives: [
    DROPDOWN_DIRECTIVES
  ],
  styleUrls: [
    './app/header.scss'
  ]
})
export class Header {
  constructor(private router: Router) {}

  gotoLink(path: string) {
    let link = [path];
    this.router.navigate(link);
  }
}
