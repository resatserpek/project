import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AuthService } from '../user/auth.service';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { Post } from 'src/models/post';
import { Observable, combineLatest, of } from 'rxjs';
import { map, switchMap, mergeMap } from 'rxjs/operators';
import { User } from 'src/models/user';

import { Following } from 'src/models/following';



@Injectable({
  providedIn: 'root'
})
export class PostHandlerService{
  
  
  private postsCollection: AngularFirestoreCollection<Post>;
  posts: Observable<Post[]>;

  private following: string[] = [];
  
  private followingCollection: AngularFirestoreCollection<Following>;
  followingList: Observable<Following[]>;
  
  //https://medium.com/@joaqcid/how-to-inner-join-data-from-multiple-collections-on-angular-firebase-bfd04f6b36b7
  constructor(private afs: AngularFirestore, private auth: AuthService, private router: Router) { 
    
    const currentUser = this.auth.getUser().uid;
    
    
    this.followingCollection = this.afs.collection<Following>('following', ref => ref.where('userId','==',currentUser))
    this.followingList = this.followingCollection.valueChanges()  
    
    this.postsCollection = this.afs.collection<Post>('posts', ref => ref.orderBy('time','desc').limit(50));
    this.posts = this.postsCollection.valueChanges()
  }
  
  create(post: Post) {
    if(this.auth.checkAuth()){
      this.afs.collection('posts').add(post)
    }else{
      this.router.navigate(['/login']);
    }
  }


}
