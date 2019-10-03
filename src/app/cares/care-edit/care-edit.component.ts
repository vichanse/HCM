import { CareStore } from './../state/care.store';
import { CareService } from './../state/care.service';
import { CareQuery } from './../state/care.query';
import { Care } from './../state/care.model';
import { Component, OnInit, ElementRef, ViewChildren, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControlName, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { GenericValidator } from '../../shared/generic-validator';
import { Observable, fromEvent, merge } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { RouterQuery } from '@datorama/akita-ng-router-store';

@Component({
  selector: 'cm-care-edit',
  templateUrl: './care-edit.component.html',
  styleUrls: ['./care-edit.component.css']
})
export class CareEditComponent implements OnInit, OnDestroy {
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
    private fb: FormBuilder,
    private routrerQuery: RouterQuery
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
      this.careService.syncDoc({ id: this.careId }).subscribe();
    }
    this.selectedCare$.pipe().subscribe(care => {
      console.log(care);
      if (undefined == care) {
        care = this.initializeCare();
      }
      this.care = care;
      this.displayCare(care);
    });
  }

  get careId(): string {
    return this.routrerQuery.getParams('id');
  }

  saveCare() {
    if (this.careForm.valid) {
      if (this.careForm.dirty) {
        if (this.care.id === undefined) {
          this.careService.add(this.careForm.value);
        } else {
          const care = { ...this.care, ...this.careForm.value };

          this.careService.update(care);
        }
      } else {
        this.careForm.reset();
      }
      this.router.navigate(['/cares']);
    } else {
      alert('Errors!');
    }
  }

  deleteCare() {
    if (undefined !== this.care) {
      if (confirm(`Really delete the care for: ${this.care.beneficiary}?`)) {
        this.careService.remove(this.care.id);
      }
    }
    this.router.navigate(['/cares']);
  }

  get careIdOld() {
    return this.route.snapshot.params.id;
  }

  displayCare(care: Care) {
    if (this.careForm) {
      this.careForm.reset();
    }
    if (undefined !== care.id && '0' !== care.id) {
      this.care.refunds.forEach(refund => this.refunds.push(this.buildRefund()));
      this.careForm.patchValue(care);
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

  private initializeCare(): Care {
    // Return an initialized object
    return {
      id: undefined,
      description: null,
      beneficiary: null,
      professional: null,
      payor: null,
      paidAmount: null,
      paymentMethod: null,
      healthCard: null,
      comment: null,
      date: null,
      refunds: []
    };
  }

  ngOnDestroy() {}
}
