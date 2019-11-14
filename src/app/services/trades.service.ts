import { Trade } from './../models/trade';
import { UserService } from './user.service';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";



@Injectable({
  providedIn: 'root'
})
export class TradesService {
  trades:Observable<Trade[]>;
  tradesDocument: AngularFirestoreDocument<Trade[]>;
  tradesCollection: AngularFirestoreCollection<Trade>;
  

  constructor(public afs:AngularFirestore) {

    this.tradesCollection = this.afs.collection('Trades');
    this.trades = this.tradesCollection.snapshotChanges().pipe(map(changes =>{
      return changes.map(a=>{
        const data = a.payload.doc.data() as Trade;
        data.id = a.payload.doc.id;
        return data;
      })
    }))
    
  }
    getTrades(){
      return this.trades;
    }

    addTrade(trade:Trade){
      console.log(trade);
      this.tradesCollection.add(trade);
    }
}


