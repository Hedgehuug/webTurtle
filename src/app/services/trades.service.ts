import { AuthService } from './auth.service';
import { Trade } from './../models/trade';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { map,switchMap } from "rxjs/operators";



@Injectable({
  providedIn: 'root'
})
export class TradesService {
  trades$:Observable<Trade[]>;
  tradesDocument: AngularFirestoreDocument<Trade[]>;
  tradesCollection: AngularFirestoreCollection<Trade>;




  constructor(
    public afs:AngularFirestore,
    private auth: AuthService){
        }
  
  

  getTrades(){
    this.auth.user$.subscribe(x=>{
      return this.retrieveTrades(x);
    })
  }

  addTrade(trade:Trade){
    console.log(trade);
    this.tradesCollection.add(trade);
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

}

