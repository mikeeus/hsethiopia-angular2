import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {Hscode} from './hscode';
import {HscodeService} from './hscode.service';

@Component({
  selector: 'hscode-detail',
  templateUrl: '/hscodes/hscode-detail.component.html',
  providers: [
    HscodeService
  ]
})
export class HscodeDetailComponent implements OnInit {
  @Input() hscode: Hscode;
  sub: any;  
  constructor(
    private hscodeService: HscodeService,
    private route: ActivatedRoute
  ){}

  ngOnInit(){
    this.sub = this.route.params.subscribe(params => {
      if (params['id'] !== undefined) {
        let id = +params['id'];
        this.hscodeService.getHscode(id)
            .then(hscode => this.hscode = hscode);
      }
    });
  }
}