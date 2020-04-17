import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { User } from 'src/models/user';
import { Post } from 'src/models/post';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private afs: AngularFirestore) { }

  getUser(id: string): Observable<User>{

    const userDoc: AngularFirestoreDocument<User> = this.afs.collection<User>('users').doc(id);
    const user: Observable<User> = userDoc.valueChanges();

    return user;
    
  }

  getPosts(id: string): Observable<Post[]>{

    return this.afs.collection<Post>('posts', ref => ref.where('userID','==', id).orderBy('time','desc')).valueChanges()
  }

  getFollowerCount(): number{
    
    return 1;
  }
}
