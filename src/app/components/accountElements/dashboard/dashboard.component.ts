import { AuthService } from './../../../services/auth.service';
import { TradesService } from './../../../services/trades.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userData;

  constructor(private ts: TradesService, private as: AuthService) { }

  ngOnInit() {
    this.as.user$.subscribe(user =>{
      
    })
    
  }

}
