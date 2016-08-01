import {Import} from './import';
import {Export} from './export';

export interface Country {
  imports: Import[];
  exports: Export[];
}