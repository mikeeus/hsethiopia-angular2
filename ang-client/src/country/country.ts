import {CountryAnnualImports} from './country-annual-imports';
import {CountryAnnualExports} from './country-annual-exports';

export interface Country {
  countryAnnualImports: CountryAnnualImports[];
  countryAnnualExports: CountryAnnualExports[];
}