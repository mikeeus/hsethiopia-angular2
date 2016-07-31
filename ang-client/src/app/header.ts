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
  public disabled:boolean = false;
  public status:{isopen:boolean} = {isopen: false};
  public items:Array<string> = ['The first choice!',
  'Choice 2', 'And a third!'
  ];

  public toggled(open:boolean):void {
    console.log('Drop is now: ', open);
  }

  public toggleDropdown($event:MouseEvent):void{
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }


  gotoLink(path: string) {
    let link = [path];
    this.router.navigate(link);
  }
}
