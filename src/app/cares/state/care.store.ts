import { Injectable } from '@angular/core';
import { Care } from './care.model';
import { EntityState, ActiveState, EntityStore, StoreConfig } from '@datorama/akita';

export interface CareState extends EntityState<Care, string>, ActiveState<string> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'care' })
export class CareStore extends EntityStore<CareState> {

  constructor() {
    super();
  }

}

