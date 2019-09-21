
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { CareModule } from './cares/care.module';
import { AppRoutingModule } from './app-routing.module';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { AkitaNgRouterStoreModule } from '@datorama/akita-ng-router-store';
import { SigninComponent } from './core/signin/signin.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    HttpClientModule,
    CareModule,
    AppRoutingModule,
    environment.production ? [] : AkitaNgDevtools.forRoot(),
    AkitaNgRouterStoreModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
