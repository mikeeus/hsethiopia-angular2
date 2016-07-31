import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'Header',
  template: require('./header.html'),
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
