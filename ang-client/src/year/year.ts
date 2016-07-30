import {AnnualCountryImports} from './annual-country-imports';
import {AnnualCountryExports} from './annual-country-exports';
import {AnnualHscodeImports} from './annual-hscode-imports';
import {AnnualHscodeExports} from './annual-hscode-exports';

export interface Year {
  annualCountryImports: AnnualCountryImports;
  annualCountryExports: AnnualCountryExports;
  annualHscodeImports: AnnualHscodeImports;
  annualHscodeExports: AnnualHscodeExports;
}