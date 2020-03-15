import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AuthService } from '../user/auth.service';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { Post } from 'src/models/post';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from 'src/models/user';

@Injectable({
  providedIn: 'root'
})
export class PostHandlerService {
  
  private postsCollection: AngularFirestoreCollection<Post>;
  posts: Observable<Post[]>;
  
  
  constructor(private afs: AngularFirestore, private auth: AuthService, private router: Router) { 
    this.postsCollection = this.afs.collection<Post>('posts', ref => ref.orderBy('time','desc').limit(50));
    this.posts = this.postsCollection.snapshotChanges().pipe(
      map(actions => actions.map( a => {
        const data = a.payload.doc.data() as Post;
        const id = a.payload.doc.id;
        return {id, ...data};
      }))
    )
  }
  
  create(post) {
    if(this.auth.checkAuth()){
      var timestamp = firebase.firestore.Timestamp.fromDate(new Date());
      var user: User = this.auth.getUser();
      //console.log(user);
      this.afs.collection('posts').add({
        content: post.content,
        displayName: user.displayName,
        mediaURL: post.mediaURL,
        time: timestamp,
        userID: user.uid
      })
    }else{
      this.router.navigate(['/login']);
    }
  }


}
