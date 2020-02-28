import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from "rxjs/operators";
import {
  AngularFirestore,
  AngularFirestoreDocument
} from '@angular/fire/firestore';

import { Observable, of, BehaviorSubject } from 'rxjs';
import { switchMap } from 'rxjs/operators'; 


import { User } from '../../../models/user';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  newUser: any;
  
  private eventAuthError = new BehaviorSubject<string>("");
  eventAuthError$ = this.eventAuthError.asObservable();

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
    ) {}

  createUser(user){
    this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password)
      .then( userCredential => {
        this.newUser = user;

        userCredential.user.updateProfile({
          displayName: user.firstName + ' ' + user.lastName
        });

        this.insertUserData(userCredential);

      })
      .catch( error => {
        console.log(error);
        this.eventAuthError.next(error);
      })
  }
  
  insertUserData(userCredential: firebase.auth.UserCredential){
    console.log(userCredential.user.uid);
    this.router.navigate(['/home']);
    
  }
  getUserState(){
    return this.afAuth.authState;
  }
  



  login(email: string,password: string){
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .catch(error => {
        this.eventAuthError.next(error);
      })
      .then(userCredential => {
        if(userCredential){
          this.router.navigate(['/home']);
        }
      })
    };

  

  logout(){
    this.afAuth.auth.signOut().then(function() {
      // Sign-out successful.
    }).catch(function(error) {
      console.log(error);
    });
  }
}
