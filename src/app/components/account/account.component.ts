import { AuthService } from './../../services/auth.service';
import { TradesService } from './../../services/trades.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  items;
  constructor(private ts:TradesService,private as:AuthService) { }
  
  ngOnInit() {
    this.as.user$.subscribe(data =>{
      this.ts.getUserData(data);
    })
  }
}
