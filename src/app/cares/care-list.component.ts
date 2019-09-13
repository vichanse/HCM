import { Component } from '@angular/core';
@Component({
    selector: 'cm-cares',
    templateUrl: './care-list.component.html'
})
export class CareListComponent {
    pageTitle: string = 'Care List';
    cares: any[] = [
        {
          "id": 1,
          "description": "Consultation",
          "beneficiary": "Keyshawn",
          "professional": "Lacroix",
          "date": "March 19, 2019",
          "payor": "Compte joint",
          "paidAmount": 30.00,
          "paymentMethod": "Carte bancaire",
          "healthCard": "Vicky"
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
          "healthCard": "Vicky"
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
          "healthCard": "Vicky"
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
          "healthCard": "Arlette"
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
          "healthCard": "Vicky"
        }
      ];
}