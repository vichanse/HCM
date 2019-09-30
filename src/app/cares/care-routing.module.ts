import { CareEditComponent } from './care-edit/care-edit.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CareListComponent } from './care-list.component';
import { CareDetailGuard } from './care-detail.guard';
import { CareDetailComponent } from './care-detail.component';
import { AuthGuard } from '../core/auth.guard';
import { CareEditGuard } from './care-edit/care-edit.guard';

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
      },
      {
        path: 'cares/:id/edit',
        canDeactivate: [CareEditGuard],
        component: CareEditComponent
      }
    ])
  ],
  exports: [RouterModule]
})
export class CareRoutingModule {}
