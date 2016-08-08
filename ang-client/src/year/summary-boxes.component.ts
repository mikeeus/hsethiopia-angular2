import {Component, Input} from '@angular/core';

@Component({
  selector: 'summary-boxes',
  templateUrl: '/year/summary-boxes.component.html',
  styleUrls: ['./year/summary-boxes.component.scss']
})
export class SummaryBoxesComponent {
  @Input() totalImports: number;
  @Input() totalExports: number;
  @Input() countriesImportedFrom: number;
  @Input() countriesExportedTo: number;
}