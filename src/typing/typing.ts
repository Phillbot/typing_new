import { INumberUpdate } from './interfaces/typing';
import { injectable, inject } from 'inversify';
import { Utils } from './utils';
import { fromEvent } from 'rxjs';
import { TYPES } from './interfaces/types';

// @injectable()
// class NumberUpdater implements INumberUpdate {
//   public decrement(indexType: number, step: number): number {

//   }
// }
