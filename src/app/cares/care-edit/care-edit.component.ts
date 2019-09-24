import { CareService } from './../state/care.service';
import { CareQuery } from './../state/care.query';
import { Care } from './../state/care.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'cm-care-edit',
  templateUrl: './care-edit.component.html',
  styleUrls: ['./care-edit.component.css']
})
export class CareEditComponent implements OnInit {
  careForm: FormGroup;
  care: Care = this.careQuery.getEntity(this.careId);

  constructor(private route: ActivatedRoute, private router: Router, private careQuery: CareQuery, private careservice: CareService) { }

  ngOnInit() {
    this.careForm = new FormGroup({
      description: new FormControl(),
      beneficiary: new FormControl(),
      professional: new FormControl(),
      payor: new FormControl(),
      paidAmount: new FormControl(),
      paymentMethod: new FormControl(),
      healthCard: new FormControl(),
    });

    if(this.careQuery.hasEntity(this.careId) === false) {
      
      this.careservice.getCare(this.careId).pipe().subscribe();
    }
    
    
    this.careQuery.selectEntity(this.careId).pipe().subscribe(care => this.displayCare(care));
    
  }

  save() {
    console.log(this.careForm);
    console.log('Saved: ' + JSON.stringify(this.careForm.value));
  }

  get careId() {
    return this.route.snapshot.params.id;
  }
  
  displayCare(care: Care) {
    if(undefined !== care) {
      this.careForm.patchValue({
        description: care.description,
        beneficiary: care.beneficiary,
        professional: care.professional,
        payor: care.payor,
        paidAmount: care.paidAmount,
        paymentMethod: care.paymentMethod,
        healthCard: care.healthCard
      })
    }
    
  }

}
