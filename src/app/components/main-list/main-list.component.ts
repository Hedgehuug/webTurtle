import { User } from './../../models/users';
import { UserService } from './../../services/user.service';
import { TradesService } from './../../services/trades.service';
import { AngularFirestoreModule, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-main-list',
  templateUrl: './main-list.component.html',
  styleUrls: ['./main-list.component.css']
})
export class MainListComponent implements OnInit {
  users:Observable<User[]>;
  
  
  constructor(private us:UserService,private ts:TradesService) {

    

  }
  
  ngOnInit() {
    this.us.getUser().subscribe(users=>{
      console.log(users);
    })
    
    this.ts.getTrades().subscribe(trades=>{
      console.log(trades);
    })

    }  
}



