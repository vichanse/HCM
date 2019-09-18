import { CareService } from './care.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICare } from './care';

@Component({
  selector: 'cm-care-detail',
  templateUrl: './care-detail.component.html',
  styleUrls: ['./care-detail.component.css']
})
export class CareDetailComponent implements OnInit {
  pageTitle: string = 'Care view';
  care: ICare;
  errorMessage = '';
  constructor(private route: ActivatedRoute, private router: Router, private careService: CareService) { }

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.getCare(id);
    }
  }

  getCare(id: number) {
    this.careService.getCare(id).subscribe({
      next: product => this.care = product,
      error: err => this.errorMessage = err
    });
  }

  onBack(): void {
    this.router.navigate(['/cares']);
    
  }

}
