import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { CareStore, CareState } from './care.store';
import { Care } from './care.model';

@Injectable({ providedIn: 'root' })
export class CareQuery extends QueryEntity<CareState, Care> {

  constructor(protected store: CareStore) {
    super(store);
  }

}
