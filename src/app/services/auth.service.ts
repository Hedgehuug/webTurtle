import { auth } from 'firebase';
import { User } from './../models/users';
import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of, pipe } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<User>;
  



  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
  ) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap( user =>{
        if(user){
          const results = this.afs.doc<User>(`Users/${user.uid}`).valueChanges()
          return results; 
        }

        else{
          return of(null);
        }

      })
    )
   }
   async googleSignin() {
    const provider =  new auth.GoogleAuthProvider();
    const credential = await this.afAuth.auth.signInWithPopup(provider);
    return this.updateUserData(credential.user);
  }

   private updateUserData(user){
     const userRef: AngularFirestoreDocument<User> = this.afs.doc(`Users/${user.uid}`);

     const data = {
       uid: user.uid,
       displayName: user.displayName,
       email: user.email
     }
     return userRef.set(data, {merge:true});

   }
   async signOut(){
     await this.afAuth.auth.signOut();
     this.router.navigate(['/']);
     console.log("logging out...");

   }
   userData(){
    return this.user$;
   }
}

