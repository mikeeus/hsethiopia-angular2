import {Component, Input, OnInit} from '@angular/core';
import {Hscode} from '../models/hscode';

@Component({
  selector: 'tax-rates',
  templateUrl: './hscodes/tax-rates.component.html',
  styleUrls: ['./hscodes/tax-rates.scss']
})
export class TaxRatesComponent implements OnInit {
  @Input() hscode: Hscode;

  ngOnInit() {

  }
}