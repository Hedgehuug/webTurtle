import { AuthService } from './auth.service';
import { Trade } from './../models/trade';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from "@angular/fire/firestore";
import { Observable, merge } from "rxjs";
import { map,switchMap } from "rxjs/operators";
import { UserData } from '../models/userData';



@Injectable({
  providedIn: 'root'
})
export class TradesService {
  trades$:Observable<Trade[]>;
  userData$:Observable<UserData[]>
  tradesDocument: AngularFirestoreDocument<Trade[]>;
  tradesCollection: AngularFirestoreCollection<Trade>;
  userDataDocument: AngularFirestoreDocument<UserData>;


  constructor(
    public afs:AngularFirestore,
    private auth: AuthService){
        }
  

  addTrade(trade:Trade){
    console.log(trade);
    this.tradesCollection.add(trade);
  }
  deleteItem(item: Trade,user){
    this.tradesDocument = this.afs.doc(`Users/${user.uid}/Entries/${item.id}`);
    this.tradesDocument.delete();
  }
  getUserData(user){
    this.userDataDocument = this.afs.doc(`userData/${user.uid}`);
    this.userDataDocument.set({userId: user.uid}, {merge:true}

    )
  }

  retrieveTrades(user){
    //Creates Observable of trades
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
  
  calcStopLoss(
    amount:number,
    entry:number,
    risk:number,
    type:boolean){
      let stopLoss:number;
      if (type === true) {
        stopLoss = ((amount-risk)/amount*entry);
      }
      else if(type === false) {
        stopLoss = ((amount+risk)/(amount/entry));
      }
      return stopLoss;
  }

}

