import { Injectable } from '@angular/core';
import { Care } from './care.model';
import { EntityState,  EntityStore, StoreConfig } from '@datorama/akita';
import { CollectionState } from 'akita-ng-fire';

export interface CareState extends CollectionState<Care> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'care' })
export class CareStore extends EntityStore<CareState, Care> {

  constructor() {
    super();
  }

}

