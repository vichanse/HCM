import { CareDetailGuard } from './cares/care-detail.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CareListComponent } from './cares/care-list.component';
import { WelcomeComponent } from './home/welcome.component';
import { CareDetailComponent } from './cares/care-detail.component';
import { CareModule } from './cares/care.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CareModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
