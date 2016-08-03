import {Component, Input} from '@angular/core';

import {Hscode} from '../models/hscode';

@Component({
  selector: 'related-codes',
  templateUrl: './hscodes/related-codes.component.html',
  styleUrls: ['./hscodes/related-codes.scss']
})
export class RelatedCodesComponent {
  @Input() relatedCodes: Hscode[];
}