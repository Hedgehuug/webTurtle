import { Trade } from './models/trade';
import { UserService } from './services/user.service';
import { TradesService } from './services/trades.service';
import { MainListComponent } from './components/main-list/main-list.component';
import { environment } from './../environments/environment';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTradeComponent } from './components/add-trade/add-trade.component';


@NgModule({
  declarations: [
    AppComponent,
    MainListComponent,
    AddTradeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFirestoreModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase, "webjournal"),  

  ],
  providers: [
    UserService,
    TradesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
