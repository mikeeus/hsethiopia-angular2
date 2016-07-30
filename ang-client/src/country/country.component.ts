import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {Country} from './country';
import {CountryService} from './country.service';

@Component({
  selector: 'country',
  templateUrl: '/country/country.component.html',
  providers: [
    CountryService
  ]
})
export class CountryComponent {
  
}