import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';


import { User } from 'src/models/user';
import { AuthService } from '../user/auth.service';
import { Observable } from 'rxjs';
import { Post } from 'src/models/post';
import { PostHandlerService } from '../post/post-handler.service';
import { AngularFireUploadTask } from '@angular/fire/storage';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private profile: AngularFirestoreDocument<User>;
  user: Observable<User>

  private userPosts: AngularFirestoreCollection<Post>
  posts: Observable<Post[]>
  
  constructor(private afs: AngularFirestore, private auth: AuthService) { 
    
    var userID = this.auth.getUser().uid;

    this.profile = this.afs.collection('users').doc(userID);
    this.user = this.profile.valueChanges();
    
    this.userPosts = this.afs.collection<Post>('posts', ref => ref.where('userID','==',userID))
    this.posts = this.userPosts.snapshotChanges().pipe(
      map(actions => actions.map( a => {
        const data = a.payload.doc.data() as Post;
        const id = a.payload.doc.id;
        return {id, ...data};
      }))
    );
  }

  // 
  update(){

  }

  getProfile(){
    return this.profile;
  }

}
