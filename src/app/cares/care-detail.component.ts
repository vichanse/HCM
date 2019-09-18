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
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.pageTitle += `: ${id}`;
    this.care = {
      "id": id,
      "description": "Consultation",
      "beneficiary": "Vicky",
      "professional": "Lacroix",
      "date": "August 19, 2019",
      "payor": "Compte joint",
      "paidAmount": 25,
      "paymentMethod": "Carte bancaire",
      "healthCard": "Vicky",
      "completed": 1
    };
  }

  onBack(): void {
    this.router.navigate(['/cares']);
    
  }

}
