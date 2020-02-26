import { DatePipe } from '@angular/common';
import { Trade } from './../../models/trade';
import { AuthService } from './../../services/auth.service';
import { TradesService } from './../../services/trades.service';
import { Component, OnInit } from '@angular/core';



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
          this.trades = x;
          for (const x in this.trades) {
            
            console.log(new Date(this.trades[3].date["seconds"]*1000));
          }
               
        })
      })
      
    }
  editItem(event,trade:Trade){
    this.editState = true;
    this.tradeToEdit = trade;
  }
  updateEntry(){
  }
  deleteTrade(event,trade:Trade){
    this.as.user$.subscribe(data=>{
      this.ts.deleteItem(trade,data)
    })
  }
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
  changeType(item:Trade){
    if (this.localType == "long") {
      item.type = true;
    } else if (this.localType == "short") {
      item.type == false;
    }
  }
}


