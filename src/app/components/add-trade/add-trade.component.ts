import { AuthService } from './../../services/auth.service';
import { TradesService } from './../../services/trades.service';
import { Trade } from './../../models/trade';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';


@Component({
  selector: 'app-add-trade',
  templateUrl: './add-trade.component.html',
  styleUrls: ['./add-trade.component.css']
})

export class AddTradeComponent implements OnInit {



  timeS= Math.round(new Date().getTime() / 1000);
  trade: Trade = {
    date: `${this.timeS}`,
    id: null,
    pair: null,
    entry: null,
    amount:null,
    type:true,
    stopLoss:null,
    exit:null,
    profit: null
  }
  expanded = false;

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
        this.trade["profit"] = null;
      }
    }
  }
  updateInfo(){
    let entry = document.getElementById("#entry");
    let amount = document.getElementById("#amount");
    let stopLoss = document.getElementById("#stopLoss");
    console.log(entry, amount, stopLoss);

  }
  changeState(){
    this.expanded = true;
  }
  closeWindow(){
    this.expanded = false;
  }
  }

