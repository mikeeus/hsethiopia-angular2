import {Component, OnInit} from '@angular/core';

import {HscodeService} from './hscode.service';
import {Hscode} from './hscode';

@Component({
  selector: 'hscodes',
  templateUrl: '/hscodes/hscodes.component.html',
  providers: [HscodeService]
})
export class HscodesComponent {
  hscodes: Hscode[];
  error: any;
  constructor(private hscodeService: HscodeService) {}

  getHscodes() {
    this.hscodeService
        .getHscodes()
        .then(hscodes => this.hscodes = hscodes)
        .catch(error => this.error = error);
  }

  ngOnInit() {
    this.getHscodes();
  }
}
