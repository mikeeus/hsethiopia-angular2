import {Import} from '../models/import';
import {Export} from '../models/export';

export interface Country {
  imports: Import[];
  exports: Export[];
}