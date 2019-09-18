import { Component, OnInit } from '@angular/core';
import { ICare } from './care';

@Component({
  selector: 'cm-care-detail',
  templateUrl: './care-detail.component.html',
  styleUrls: ['./care-detail.component.css']
})
export class CareDetailComponent implements OnInit {
  pagetTitle: string = 'Care view';
  care: ICare;
  constructor() { }

  ngOnInit() {
  }

}
