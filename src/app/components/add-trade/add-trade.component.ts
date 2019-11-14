import { TradesService } from './../../services/trades.service';
import { Trade } from './../../models/trade';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';


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
  constructor(private userService: UserService, private tService: TradesService) { 
    
    
  }

  ngOnInit() {
    this.trade.exit = this.trade.entry;
  }

  onSubmit(){
    this.tService.addTrade(this.trade);
    for (let key in this.trade) {
      if (this.trade.hasOwnProperty(key)) {
        this.trade[key] = null;
      }
    }
    this.trade.profit = null;
    }
  }

