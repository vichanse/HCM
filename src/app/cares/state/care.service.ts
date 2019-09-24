import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CareStore, CareState } from './care.store';
import { CollectionConfig, CollectionService } from 'akita-ng-fire';
import { Observable, of } from 'rxjs';
import { Care } from './care.model';
import { tap, catchError, map } from 'rxjs/operators';
import { ID } from '@datorama/akita';

@Injectable({ providedIn: 'root' })
@CollectionConfig({ path: 'cares' })
export class CareService extends CollectionService<CareState> {

  private careUrl = 'api/cares/cares.json';
  constructor(store: CareStore, private http: HttpClient) {
    super(store);
  }

  getCares(): Observable<Care[]> {
    return this.http.get<Care[]>(this.careUrl).pipe(
        tap(data => this.store.set(data))
    );
}

  getCare(id: ID): Observable<Care | undefined> {
    return this.getCares()
      .pipe(
        map((cares: Care[]) => cares.find(care => care.id === id)),tap(care => this.store.add(care))
      );
  }

}
