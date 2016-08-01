import {AnnualChartData} from './annual-chart-data';

export interface CountryChart {
  countryAnnualImports: AnnualChartData[];
  countryAnnualExports: AnnualChartData[];
}