//https://fireship.io/lessons/angularfire-google-oauth/
import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user';

import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore} from '@angular/fire/firestore';

import { Observable, of, BehaviorSubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  //https://itnext.io/step-by-step-complete-firebase-authentication-in-angular-2-97ca73b8eb32
  user$: Observable<firebase.User>;
  private userDetails: firebase.User = null;
  
  private eventAuthError = new BehaviorSubject<string>("");
  eventAuthError$ = this.eventAuthError.asObservable();

  //https://fireship.io/lessons/angularfire-google-oauth/
  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
    ) {   
      this.user$ = afAuth.authState.pipe(
        switchMap(user => {
          if(user){
            this.userDetails = user;
            return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
          } else{
            return of(null);
          }
        })

      )  
    }


  checkAuth(){
    return ((this.userDetails == null) ? false : true);
  }


  //https://itnext.io/step-by-step-complete-firebase-authentication-in-angular-2-97ca73b8eb32
  // CHANGE THIS LATER
  signInWithTwitter() {
    return this.afAuth.auth.signInWithPopup(
      new firebase.auth.TwitterAuthProvider()
    )
  }

  signInWithFacebook() {
    return this.afAuth.auth.signInWithPopup(
      new firebase.auth.FacebookAuthProvider()
    )
  }

  signInWithGoogle() {
    return this.afAuth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    )
  }

  signOut(){
    this.afAuth.auth.signOut()
    .then((res) => this.router.navigate(['/']));
    console.log(`Signed out`)
  }


  
  private insertUserData({ uid, email, displayName, photoURL }){
    // Inserting user data into database
    this.afs.collection('users').doc(uid).set({ uid, email, displayName, photoURL })
    
    // Inserting user data to authentication service, for later use
    

    this.router.navigate(['/home']);
  }

  register(user){
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
      .then( res => {
        const newUser = {
          uid: res.user.uid,
          email: res.user.email,
          displayName: user.firstName + " " + user.lastName,
          photoURL: res.user.photoURL
        }
        this.insertUserData(newUser);
        res.user.updateProfile({
          displayName: user.firstName + " " + user.lastName
        })
      })
      .catch(error => {
        console.log(error)
      })
    //
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

  getUser(): User{
    return this.userDetails;
  }

}
