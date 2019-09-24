
import { Component, OnInit } from '@angular/core';
import { ICare } from './care'
import { CareService } from './state/care.service';
import { Care } from './state/care.model';
@Component({
    selector: 'cm-cares',
    templateUrl: './care-list.component.html',
    styleUrls: ['./care-list.component.css']
})
export class CareListComponent implements OnInit{
    
    pageTitle: string = 'Care List';
    _listFilter: string ;
    filteredCares : Care[];
    cares: Care[] = [];
    errorMessage: string;

    constructor(private careService: CareService) {
    }

    ngOnInit(): void {
        this.careService.getCares().subscribe({
            next: cares => {
                this.cares = cares,
                this.filteredCares = this.cares
            },
            error: err => this.errorMessage = err
        });
        
    }

    get listFilter() : string {
        return this._listFilter;
    }

    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredCares = this.listFilter ? this.performFilter(this.listFilter) : this.cares;
    }

    performFilter(filterBy: string): Care[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.cares.filter((care: Care) => care.beneficiary.toLocaleLowerCase().indexOf(filterBy) !== -1)
    }
    
}