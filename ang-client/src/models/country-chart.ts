import {CountryAnnualImports} from './country-annual-imports';
import {CountryAnnualExports} from './country-annual-exports';

export interface CountryChart {
  countryAnnualImports: CountryAnnualImports[];
  countryAnnualExports: CountryAnnualExports[];
}