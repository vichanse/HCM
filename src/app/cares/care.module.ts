import { CareListComponent } from './care-list.component';
import { NgModule } from '@angular/core';
import { CareDetailComponent } from './care-detail.component';
import { SharedModule } from '../shared/shared.module';
import { CareRoutingModule } from './care-routing.module';



@NgModule({
  declarations: [
    CareListComponent,
    CareDetailComponent
  ],
  imports: [
    SharedModule,
    CareRoutingModule
  ]
})
export class CareModule { }
