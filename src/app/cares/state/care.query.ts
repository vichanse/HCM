import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { RouterQuery } from '@datorama/akita-ng-router-store';
import { CareStore, CareState } from './care.store';
import { Care } from './care.model';
import { switchMap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class CareQuery extends QueryEntity<CareState, Care> {
  selectedCare$ = this.routerQuery
    .selectParams('id')
    .pipe(switchMap((id: string) => this.selectEntity(id)));
  constructor(protected store: CareStore, private routerQuery: RouterQuery) {
    super(store);
  }
}
