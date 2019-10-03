import { Injectable } from '@angular/core';
import { CareStore, CareState } from './care.store';
import { CollectionConfig, CollectionService } from 'akita-ng-fire';

import { Care } from './care.model';

import { AngularFirestore } from '@angular/fire/firestore';
import { syncCollection } from '../../core/syncCollection';

@Injectable({ providedIn: 'root' })
@CollectionConfig({ path: 'cares' })
export class CareService extends CollectionService<CareState>{


  constructor(store: CareStore, db: AngularFirestore) {
    super( store, 'cares');
  }




}
