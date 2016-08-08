import {Injectable} from '@angular/core';

@Injectable()
export class SummaryBoxesComponent {
  @Input() totalImports: number;
  @Input() totalExports: number;
  @Input() countriesImportedFrom: number;
  @Input() countriesExportedTo: number;
}