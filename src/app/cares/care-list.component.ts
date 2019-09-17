import { CareService } from './care.service';
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
    cares: ICare[] = [];

    constructor(private careService: CareService) {
    }

    ngOnInit(): void {
        this.cares =this.careService.getCares();
        this.filteredCares = this.cares;
        
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
    
}