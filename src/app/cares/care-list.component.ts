import { CareQuery } from './state/care.query';
import { Observable, combineLatest } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { CareService } from './state/care.service';
import { Care } from './state/care.model';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { FormControl } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'cm-cares',
  templateUrl: './care-list.component.html',
  styleUrls: ['./care-list.component.css']
})
export class CareListComponent implements OnInit, OnDestroy {
  pageTitle: string = 'Care List';
  cares$: Observable<Care[]>;
  filteredCare$: Observable<Care[]>;
  loading$: Observable<boolean>;
  errorMessage: string;
  filter: FormControl = new FormControl('');
  filter$: Observable<string> = this.filter.valueChanges.pipe(startWith(''));

  constructor(private careService: CareService, private careQuery: CareQuery) {}

  ngOnInit(): void {
    this.careService
      .syncCollection()
      .subscribe();

    this.loading$ = this.careQuery.selectLoading();
    this.cares$ = this.careQuery.selectAll();
    // this.filteredCare$ = combineLatest(this.cares$, this.filter$).pipe(
    //   map(([cares, filterString]) => cares.filter(care => care.beneficiary.toLowerCase().includes(filterString)))
    // );
  }

  trackByFn(i, care) {
    return care.id;
  }
  ngOnDestroy(): void {}
}
