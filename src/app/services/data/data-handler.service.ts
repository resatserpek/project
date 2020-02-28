import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


import 'firebase/firestore';

import { Post } from '../../../models/post'
@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {
  postCollection: AngularFirestoreCollection<Post>;
  posts: Observable<Post[]>;
  
  constructor(private afs: AngularFirestore) { 
    //this.posts = this.afs.collection('posts').snapshotChanges();
    
  }

  getPosts(){
    return this.posts;
  }
}
