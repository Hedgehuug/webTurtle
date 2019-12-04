import { Trade } from './../../models/trade';
import { switchMap, map } from 'rxjs/operators';
import { AuthService } from './../../services/auth.service';
import { User } from './../../models/users';
import { UserService } from './../../services/user.service';
import { TradesService } from './../../services/trades.service';
import { AngularFirestoreModule, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';


@Component({
  selector: 'app-main-list',
  templateUrl: './main-list.component.html',
  styleUrls: ['./main-list.component.css']
})
export class MainListComponent implements OnInit {
  trades:Trade[];
  userData = this.as.userData();
  

  constructor(
    private us:UserService,
    private ts:TradesService,
    private as:AuthService) {
      
    }

    ngOnInit() {
      this.as.user$.subscribe(x=>{
        const a = this.ts.retrieveTrades(x);
        a.subscribe(x=>{
          console.log(x);          
          this.trades = x;
          console.log(this.ts.getTrades());
                      
        })
      })
      
    }
  public trySub(){
    this.userData.subscribe(data=>{
      console.log(data.uid);

    })
  }
}


