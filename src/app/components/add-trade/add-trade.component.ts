import { AuthService } from './../../services/auth.service';
import { TradesService } from './../../services/trades.service';
import { Trade } from './../../models/trade';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';



@Component({
  selector: 'app-add-trade',
  templateUrl: './add-trade.component.html',
  styleUrls: ['./add-trade.component.css']
})

export class AddTradeComponent implements OnInit {



  timeS= Math.round(new Date().getTime() / 1000);
  trade: Trade = {
    date: null,
    id: null,
    pair: null,
    entry: null,
    amount:null,
    type:null,
    stopLoss:null,
    exit:null,
    profit: null,
    risk: null,
    comment: null
  }
  expanded = false;
  localType = null;
  risk:number;
  

  constructor(
    private userService: UserService,
    private tService: TradesService,
    private auth: AuthService) { 
    
  }

  ngOnInit() {
  }

  onSubmit(){
    this.tService.addTrade(this.trade);
    this.expanded = false;
    for (let key in this.trade) {
      if (this.trade.hasOwnProperty(key)) {
        this.trade[key] = null;
      }
    }
  }
  changeState(){
    this.expanded = true;
  }
  closeWindow(){
    this.expanded = false;
  }
  switchType(){
    if (this.trade.type == true) {
      this.trade.type = false;
    }
    else if (this.trade.type == false) {
      this.trade.type = true;
    }
  }

  //Calculating Stop-loss
  getStopLoss(){
    if (this.trade.amount != null && this.trade.entry != null && this.risk != null) {
      this.trade.stopLoss = this.tService.calcStopLoss(
        this.trade.amount,
        this.trade.entry,
        this.risk,
        this.trade.type)
    }
  }
  changeType(){
    if (this.localType == "long") {
      this.trade.type = true;
    } else if (this.localType == "short") {
      this.trade.type == false;
    }
  }
}

