import { Component, OnInit } from '@angular/core';
import { ICare } from './care'
@Component({
    selector: 'cm-cares',
    templateUrl: './care-list.component.html',
    styleUrls: ['./care-list.component.css']
})
export class CareListComponent implements OnInit{
    
    pageTitle: string = 'Care List';
    _listFilter: string ;
    filteredCares : ICare[];

    constructor() {
        this.filteredCares = this.cares;
        this.listFilter = 'key';
    }

    ngOnInit(): void {
        console.log('In OnInit');
    }

    get listFilter() : string {
        return this._listFilter;
    }

    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredCares = this.listFilter ? this.performFilter(this.listFilter) : this.cares;
    }

    performFilter(filterBy: string): ICare[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.cares.filter((care: ICare) => care.beneficiary.toLocaleLowerCase().indexOf(filterBy) !== -1)
    }
    cares: ICare[] = [
        {
          "id": 1,
          "description": "Consultation",
          "beneficiary": "Keyshawn",
          "professional": "Lacroix",
          "date": "March 19, 2019",
          "payor": "Compte joint",
          "paidAmount": 30.00,
          "paymentMethod": "Carte bancaire",
          "healthCard": "Vicky",
          "completed": 0.7
        },
        {
          "id": 2,
          "description": "Consultation",
          "beneficiary": "Keylia",
          "professional": "Lacroix",
          "date": "May 19, 2019",
          "payor": "Compte joint",
          "paidAmount": 25.00,
          "paymentMethod": "Carte bancaire",
          "healthCard": "Vicky",
          "completed": 0.7
        },
        {
          "id": 3,
          "description": "Consultation",
          "beneficiary": "Keyrwynn",
          "professional": "Lacroix",
          "date": "June 19, 2019",
          "payor": "Compte joint",
          "paidAmount": 30.00,
          "paymentMethod": "Carte bancaire",
          "healthCard": "Vicky",
          "completed": 1
        },
        {
          "id": 4,
          "description": "Consultation",
          "beneficiary": "Arlette",
          "professional": "Brosse",
          "date": "July 19, 2019",
          "payor": "Compte joint",
          "paidAmount": 25.00,
          "paymentMethod": "Carte bancaire",
          "healthCard": "Arlette",
          "completed": 0
        },
        {
          "id": 5,
          "description": "Consultation",
          "beneficiary": "Vicky",
          "professional": "Lacroix",
          "date": "August 19, 2019",
          "payor": "Compte joint",
          "paidAmount": 25,
          "paymentMethod": "Carte bancaire",
          "healthCard": "Vicky",
          "completed": 0.5
        }
      ];

    
}