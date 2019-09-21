import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CareListComponent } from './care-list.component';
import { CareDetailGuard } from './care-detail.guard';
import { CareDetailComponent } from './care-detail.component';
import { AuthGuard } from '../core/auth.guard';



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild([
      { 
        path: 'cares', 
        canActivate: [AuthGuard],
        component: CareListComponent 
      },
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
