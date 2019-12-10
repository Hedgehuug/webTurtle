import { MaterialDesignModule } from './matDesign/material-design/material-design.module';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { TradesService } from './services/trades.service';
import { environment } from './../environments/environment';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { FormsModule } from '@angular/forms';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { MainListComponent } from './components/main-list/main-list.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTradeComponent } from './components/add-trade/add-trade.component';
import { RegistrationComponent } from './components/auth/registration/registration.component';
import { LoginComponent } from './components/auth/login/login.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { AccountComponent } from './components/account/account.component';



@NgModule({
  declarations: [
    AppComponent,
    MainListComponent,
    AddTradeComponent,
    RegistrationComponent,
    LoginComponent,
    LandingPageComponent,
    NavigationComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFirestoreModule,
    FormsModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase, "webjournal"),
    MaterialDesignModule
  ],
  providers: [
    UserService,
    TradesService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
