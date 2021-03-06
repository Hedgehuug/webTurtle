import { DatePipe } from '@angular/common';
import { MaterialDesignModule } from './matDesign/material-design/material-design.module';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { TradesService } from './services/trades.service';
import { environment } from './../environments/environment';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MAT_DATE_LOCALE } from '@angular/material';


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
import { FlexLayoutModule } from '@angular/flex-layout';
import { DashboardComponent } from './components/accountElements/dashboard/dashboard.component';
import { EntriesComponent } from './components/accountElements/entries/entries.component';
import { UnderConstructionComponent } from './components/under-construction/under-construction.component';
import { AccountChartComponent } from './components/accountElements/account-chart/account-chart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    MainListComponent,
    AddTradeComponent,
    RegistrationComponent,
    LoginComponent,
    LandingPageComponent,
    NavigationComponent,
    AccountComponent,
    DashboardComponent,
    EntriesComponent,
    UnderConstructionComponent,
    AccountChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFirestoreModule,
    FormsModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase, "webjournal"),
    MaterialDesignModule,
    FlexLayoutModule,
    NgxChartsModule,
    BrowserAnimationsModule
  ],
  providers: [
    UserService,
    TradesService,
    AuthService,
    {provide: MAT_DATE_LOCALE, useValue: 'en-GB'},
    DatePipe
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
  
})
export class AppModule { }
