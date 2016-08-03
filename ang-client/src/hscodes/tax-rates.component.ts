import {Component, Input} from '@angular/core';
import {Hscode} from '../models/hscode';

@Component({
  selector: 'tax-rates',
  templateUrl: './tax-rates.component.html',
  styleUrls: ['./tax-rates.scss']
})
export class TaxRatesComponent {
  @Input() hscode: Hscode;
}