import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { User } from 'src/models/user';
import { Post } from 'src/models/post';
import { Following } from 'src/models/following';
import { map } from 'rxjs/operators';
import { AuthService } from 'src/services/user/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private afs: AngularFirestore, private auth: AuthService) { }

  getUser(id: string): Observable<User>{

    const userDoc: AngularFirestoreDocument<User> = this.afs.collection<User>('users').doc(id);
    const user: Observable<User> = userDoc.valueChanges()

    return user;
    
  }
  getUsers():Observable<User[]>{
    return this.afs.collection<User>('users').valueChanges();
  }

  getPosts(id: string): Observable<Post[]>{

    return this.afs.collection<Post>('posts', ref => ref.where('userID','==', id).orderBy('time','desc')).valueChanges()
  }

  getFollowings(id: string): Observable<Following[]>{
    return this.afs.collection<Following>('following', ref => ref.where('userId','==',id)).valueChanges();
  }

  getFollowers(id: string): Observable<Following[]>{
    return this.afs.collection<Following>('following', ref => ref.where('followingId','==',id)).valueChanges();
  }

}
