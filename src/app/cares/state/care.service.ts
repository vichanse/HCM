import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CareStore, CareState } from './care.store';
import { CollectionConfig, CollectionService } from 'akita-ng-fire';
import { Observable, of } from 'rxjs';
import { Care } from './care.model';
import { tap, catchError, map } from 'rxjs/operators';
import { ID } from '@datorama/akita';
import { AngularFirestore } from '@angular/fire/firestore';
import { syncCollection } from '../../core/syncCollection';

@Injectable({ providedIn: 'root' })
@CollectionConfig({ path: 'cares' })
export class CareService {
  private careUrl = 'api/cares/cares.json';

  private collection = this.db.collection('cares');

  constructor(private http: HttpClient, private store: CareStore, private db: AngularFirestore) {}

  connect() {
    return syncCollection(this.collection, this.store);
  }

  addCare(care: Care) {
    this.collection.add(care);
  }

  removeCare(care: Care) {
    this.collection.doc(care.id).delete();
  }

  editCare(care: Care) {
    this.collection.doc(care.id).update(care);
  }

  getCares(): Observable<Care[]> {
    return this.http.get<Care[]>(this.careUrl).pipe(tap(data => this.store.set(data)));
  }

  getCare(id: ID): Observable<Care | undefined> {
    return this.getCares().pipe(
      map((cares: Care[]) => cares.find(care => care.id === id)),
      tap(care => this.store.add(care))
    );
  }
}
