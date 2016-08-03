import {Component, Input} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {Hscode} from '../models/hscode';

@Component({
  selector: 'related-codes',
  templateUrl: './hscodes/related-codes.component.html',
  styleUrls: ['./hscodes/related-codes.scss']
})
export class RelatedCodesComponent {
  @Input() relatedCodes: Hscode[];
  sub: any;
  code: number;
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  gotoDetail(hscode: Hscode) {
    let link = ['hscode/', hscode.code];
    this.router.navigate(link);
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.code = +params['code'];
    });
  }
}