import { UserData } from './../models/userData';
import { AuthService } from './auth.service';
import { Trade } from './../models/trade';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from "@angular/fire/firestore";
import { Observable, merge } from "rxjs";
import { map,switchMap } from "rxjs/operators";




@Injectable({
  providedIn: 'root'
})
export class TradesService {
  trades$:Observable<Trade[]>;
  userData$:Observable<UserData>
  tradesDocument: AngularFirestoreDocument<Trade>;
  tradesCollection: AngularFirestoreCollection<Trade>;
  userDataDocument: AngularFirestoreDocument<UserData>;



  constructor(
    public afs:AngularFirestore,
    private auth: AuthService){
        }
  

  addTrade(trade:Trade){
    this.tradesCollection.add(trade);
  }

  deleteItem(item: Trade,user){
    this.tradesDocument = this.afs.doc(`Users/${user.uid}/Entries/${item.id}`);
    this.tradesDocument.delete();
  }

  //get Global User data
  getUserData(user){
    this.userDataDocument = this.afs.doc(`userData/${user.uid}`);
    this.userData$ = this.userDataDocument.valueChanges();
    this.userDataDocument.set({userId: user.uid}, {merge:true});
    return this.userData$
  }


  //Creates Observable of trades
  retrieveTrades(user){
    this.tradesCollection = this.afs.collection(`Users/${user.uid}/Entries`);
    
    this.trades$ = this.tradesCollection.snapshotChanges().pipe(map(changes =>{
      return changes.map(a=>{
      const data = a.payload.doc.data() as Trade;
      data.id = a.payload.doc.id;
      return data;
      })
    }))
    return this.trades$;
  }
  //Logic behind stop-loss calculation
  calcStopLoss(
    amount:number,
    entry:number,
    risk:number,
    type:boolean,
    leverage:number){      
      let stopLoss: number;
      let levAmount = amount*leverage
      if (type === true) {
        stopLoss = ((levAmount-risk)/levAmount*entry);
      }
      else if(type === false) {
        stopLoss = ((amount+risk)/(amount/entry));
      }      
      return stopLoss;
  };

  //Logic behind profit
  calcProfit(trade:Trade){
    let profit:number;
    if (trade.type === true) {
      profit = (((trade.exit/trade.entry)*(trade.amount*trade.leverage))-(trade.amount*trade.leverage));
    }
    else if(trade.type === false) {
      profit = (-1*((trade.exit/trade.entry)*(trade.amount*trade.leverage)-trade.amount));
    };
    return profit;
  };


  updateEntries(trade:Trade,user){
    this.tradesDocument = this.afs.doc(`Users/${user.uid}/Entries/${trade.id}`);
    this.tradesDocument.update(trade)
    
  };

  //Calculating entry validities
  isStopLossValid(trade:Trade){
    let result: Boolean;
    if (
      trade.amount != null &&
      trade.entry != null && 
      trade.risk != null
      ){
      result = true
    }

    else{
      result = false
    }
    return result
  };
  isProfitValid(trade:Trade){
    let result: Boolean;
    if (
      trade.amount != null &&
      trade.entry != null &&
      trade.leverage != null &&
      trade.exit != null
    ){
      result = true;
    } else{
      result = false;
    }
    return result;
  }
}

