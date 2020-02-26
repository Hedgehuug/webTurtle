import { AuthService } from './auth.service';
import { User } from './../models/users';
import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestore} from "@angular/fire/firestore";
import { Observable } from "rxjs";




@Injectable({
  providedIn: 'root'
})
export class UserService {
  user$:Observable<User>;
  usersDocument: AngularFirestoreDocument<User>;
  usersCollection: AngularFirestoreCollection<User>;
  user:User;
  
  

  constructor(
    public afs: AngularFirestore,
    public as: AuthService) {

    this.as.user$.subscribe(data =>{
    
      const userObj = {
        uid: data.uid,
        displayName: data.displayName,
        email: data.email
      }

      
      this.user = userObj;
    })
    
  }


  getUser(){
    return this.user;
  }
  getUerId(){
    return this.user$["id"];
  }
}
