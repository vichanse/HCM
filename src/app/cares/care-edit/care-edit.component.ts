import { CareService } from './../state/care.service';
import { CareQuery } from './../state/care.query';
import { Care } from './../state/care.model';
import { Component, OnInit, ElementRef, ViewChildren } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControlName, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { GenericValidator } from '../../shared/generic-validator';
import { Observable, fromEvent, merge } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'cm-care-edit',
  templateUrl: './care-edit.component.html',
  styleUrls: ['./care-edit.component.css']
})
export class CareEditComponent implements OnInit {
  @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];
  pageTitle: string = 'Edit care';
  careForm: FormGroup;
  care: Care;
  selectedCare$ = this.careQuery.selectedCare$;

  // Use with the generic validation message class
  displayMessage: { [key: string]: string } = {};
  private validationMessages: { [key: string]: { [key: string]: string } };
  private genericValidator: GenericValidator;

  get refunds(): FormArray {
    return <FormArray>this.careForm.get('refunds');
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private careQuery: CareQuery,
    private careService: CareService,
    private fb: FormBuilder
  ) {
    // Defines all of the validation messages for the form.
    // These could instead be retrieved from a file or database.
    this.validationMessages = {
      description: {
        required: 'Please enter a description.'
      },
      beneficiary: {
        required: 'Please enter a beneficiary.'
      },
      professional: {
        required: 'Please enter a professional.'
      },
      payor: {
        required: 'Please enter a payor.'
      },
      paidAmount: {
        required: 'Please enter the amount paid.'
      },
      paymentMethod: {
        required: 'Please enter the payment method.'
      },
      healthCard: {
        required: 'Please enter the health card used.'
      }
    };

    // Define an instance of the validator for use with this form,
    // passing in this form's set of validation messages.
    this.genericValidator = new GenericValidator(this.validationMessages);
  }

  ngOnInit() {
    this.careForm = this.fb.group({
      description: ['', Validators.required],
      beneficiary: ['', Validators.required],
      professional: ['', Validators.required],
      payor: ['', Validators.required],
      paidAmount: ['', Validators.required],
      paymentMethod: ['', Validators.required],
      healthCard: ['', Validators.required],
      comment: [''],
      refunds: this.fb.array([])
    });

    if (this.careQuery.hasEntity(this.careId) === false) {
      this.careService
        .getCare(this.careId)
        .pipe()
        .subscribe();
    }

    this.selectedCare$
      .pipe()
      .subscribe(care => {
        this.care = care;
        this.displayCare(care)}
        );
  }

  saveCare() {
    console.log(this.careForm);

    const care = { ...this.care, ...this.careForm.value };
    console.log(care);
    this.careService.addCare(care);
  }

  deleteCare() {}

  get careId() {
    return this.route.snapshot.params.id;
  }

  displayCare(care: Care) {
    if (undefined !== care) {
      this.careForm.patchValue({
        description: care.description,
        beneficiary: care.beneficiary,
        professional: care.professional,
        payor: care.payor,
        paidAmount: care.paidAmount,
        paymentMethod: care.paymentMethod,
        healthCard: care.healthCard,
        comment: care.comment ? care.comment :''
      });
    }
  }

  buildRefund(): FormGroup {
    return this.fb.group({
      transmission: '',
      sendDate: '',
      refundDate: '',
      amount: null,
      onAccount: ''
    });
  }

  addRefund(): void {
    this.refunds.push(this.buildRefund());
  }

  // remove refund from group
  removeRefund(index) {
    // this.contactList = this.form.get('contacts') as FormArray;
    this.refunds.removeAt(index);
  }

  ngAfterViewInit(): void {
    // Watch for the blur event from any input element on the form.
    // This is required because the valueChanges does not provide notification on blur
    const controlBlurs: Observable<any>[] = this.formInputElements.map((formControl: ElementRef) =>
      fromEvent(formControl.nativeElement, 'blur')
    );

    // Merge the blur event observable with the valueChanges observable
    // so we only need to subscribe once.
    merge(this.careForm.valueChanges, ...controlBlurs)
      .pipe(debounceTime(800))
      .subscribe(value => {
        this.displayMessage = this.genericValidator.processMessages(this.careForm);
      });
  }
}
