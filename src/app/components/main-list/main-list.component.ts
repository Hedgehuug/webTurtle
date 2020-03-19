import { DatePipe } from '@angular/common';
import { Trade } from './../../models/trade';
import { AuthService } from './../../services/auth.service';
import { TradesService } from './../../services/trades.service';
import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';



@Component({
  selector: 'app-main-list',
  templateUrl: './main-list.component.html',
  styleUrls: ['./main-list.component.css']
})
export class MainListComponent implements OnInit {
  trades:Trade[];
  userData = this.as.userData();
  editState = false;
  tradeToEdit:Trade;
  localType;
  localDate;
  

  constructor(
    private ts:TradesService,
    private as:AuthService,
    private datePipe:DatePipe) {
      
    }

    ngOnInit() {

      this.as.user$.subscribe(x=>{
        const a = this.ts.retrieveTrades(x);
        a.subscribe(x=>{         
          
          this.trades = x.sort(function(a,b){let varA = a.date;let varB = b.date; return varA<varB ? 1: varA>varB ? -1:0})
        })
      })
      
    }

  //Function called when Submitting entry updates
  updateEntry(event,trade:Trade){
    this.as.user$.subscribe(data=>{
      this.ts.updateEntries(trade,data)
    })

  }


  //Function calling Delete function from trades-service
  deleteTrade(event,trade:Trade){
    this.as.user$.subscribe(data=>{
      this.ts.deleteItem(trade,data)
    })
  }


  //Function for displaying proper trade type
  getInfo(item:Trade){
    if (item.type == true) {
      this.localType = "Long";
    }
    else{
      this.localType = "Short";
    }
    let p = new Date(item.date["seconds"] * 1000);
    this.localDate = p.toISOString().slice(0,10);
  }

  //Matches string input to boolean value
  changeType(event,item:Trade){
    
    if (this.localType == "long") {
      item.type = true;
    } else if (this.localType == "short") {
      item.type == false;
    }
    
  }

  //Sections past this area are for calculating certain variables

  //Calling multiple functions on ValueChange
  multiBranch(event,trade:Trade){
    this.getStopLoss(event,trade);
    this.getProfit(event,trade);
  }

  //stop-loss calculation
  getStopLoss(event,trade:Trade){
    if (this.ts.isStopLossValid(trade)) {
      trade.stopLoss = this.ts.calcStopLoss(
        trade.amount,
        trade.entry,
        trade.risk,
        trade.type,
        trade.leverage);
        
    }
  }

  //Profit calculation
  getProfit(event,trade:Trade){
    if (this.ts.isProfitValid(trade)){
      trade.profit = this.ts.calcProfit(trade);
    }
  } 
}


