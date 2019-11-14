import { User } from './../models/users';
import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestore} from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";




@Injectable({
  providedIn: 'root'
})
export class UserService {
  users:Observable<User[]>;
  usersDocument: AngularFirestoreDocument<User[]>;
  usersCollection: AngularFirestoreCollection<User>;
  
  

  constructor(public afs: AngularFirestore) {



    this.usersCollection = afs.collection("Users");
    /// /// /// ///
    this.users = this.usersCollection.snapshotChanges().pipe(map(changes =>{
      return changes.map(a =>{
        const data = a.payload.doc.data() as User;
        data.id = a.payload.doc.id;
        return data;
      })
    }));
    
  }


  getUser(){
    return this.users;
  }
  getUerId(){
    return this.users[0]["id"];
  }
}
