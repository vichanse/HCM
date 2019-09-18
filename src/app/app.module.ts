import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CareListComponent } from './cares/care-list.component';
import { WelcomeComponent } from './home/welcome.component';
import { StarComponent } from './shared/star.component';
import { CareDetailComponent } from './cares/care-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CareListComponent,
    WelcomeComponent,
    StarComponent,
    CareDetailComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'cares', component: CareListComponent },
      { path: 'cares/:id', component: CareDetailComponent },
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
