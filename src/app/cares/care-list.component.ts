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

    performFilter(filterBy: string): ICare[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.cares.filter((care: ICare) => care.beneficiary.toLocaleLowerCase().indexOf(filterBy) !== -1)
    }
    
}