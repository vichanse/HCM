import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICare } from './care';
import { CareService } from './state/care.service';
import { CareQuery } from './state/care.query';

@Component({
  selector: 'cm-care-detail',
  templateUrl: './care-detail.component.html',
  styleUrls: ['./care-detail.component.css']
})
export class CareDetailComponent implements OnInit, OnDestroy {
  pageTitle: string = 'Care view';
  selectedCare$ = this.careQuery.selectedCare$;
  errorMessage = '';
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private careService: CareService,
    private careQuery: CareQuery
  ) {}

  ngOnInit() {}

  onBack(): void {
    this.router.navigate(['/cares']);
  }

  ngOnDestroy(): void {}
}
