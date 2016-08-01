import {AnnualChartData} from './annual-chart-data';

export interface AnnualChart {
  countryAnnualImports: AnnualChartData[];
  countryAnnualExports: AnnualChartData[];
}