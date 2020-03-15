import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'src/models/user';
import { AuthService } from '../user/auth.service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private profile: AngularFirestoreDocument<User>;
  user: Observable<User>
  
  constructor(private afs: AngularFirestore, private auth: AuthService) { 
    
    this.profile = this.afs.collection('users').doc(this.auth.getUser().uid);
    this.user = this.profile.valueChanges();
    
  }

  // 
  update(){

  }

  getProfile(){
    return this.profile;
  }

}
