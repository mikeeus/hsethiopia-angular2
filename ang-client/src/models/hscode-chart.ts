import {HscodeAnnualImports} from './hscode-annual-imports';
import {HscodeAnnualExports} from './hscode-annual-exports';

export interface HscodeChart {
  hscodeAnnualImports: HscodeAnnualImports[];
  hscodeAnnualExports: HscodeAnnualExports[];
}