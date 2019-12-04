import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  userId=this.auth.userData();
  


  constructor(private auth: AuthService) { }
  
  ngOnInit() {}

  printId(){
    console.log("succ");
    
  }
}
