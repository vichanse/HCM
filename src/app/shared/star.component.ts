import { Component, Input, OnChanges } from '@angular/core';
@Component({
    selector: 'cm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges{
    
    @Input() rating: number;
    starWidth: number;

    ngOnChanges(): void {
        this.starWidth = this.rating * 75 ;
    }

    get color() {
        return this.rating === 1 ? '#58D68D' : '#F4D03F'; 
    }
}