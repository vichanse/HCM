import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CareListComponent } from './care-list.component';
import { CareDetailGuard } from './care-detail.guard';
import { CareDetailComponent } from './care-detail.component';



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild([
      { path: 'cares', component: CareListComponent },
      { 
        path: 'cares/:id', 
        canActivate: [CareDetailGuard],
        component: CareDetailComponent 
      }
    ])
  ],
  exports: [ RouterModule ]
})
export class CareRoutingModule { }
