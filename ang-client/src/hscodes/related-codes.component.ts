import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';

import {Hscode} from '../models/hscode';

@Component({
  selector: 'related-codes',
  templateUrl: './hscodes/related-codes.component.html',
  styleUrls: ['./hscodes/related-codes.scss']
})
export class RelatedCodesComponent {
  @Input() relatedCodes: Hscode[];
  constructor(private router: Router) {}

  gotoDetail(hscode: Hscode) {
    let link = ['hscode/', hscode.code];
    this.router.navigate(link);
  }
}