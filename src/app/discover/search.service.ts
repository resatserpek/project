import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Post } from 'src/models/post';
import { map } from 'rxjs/operators';
import { User } from 'src/models/user';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private afs: AngularFirestore) { }

  // Adapted from https://github.com/rajayogan/angular5-instantsearch/blob/master/src/app/app.component.ts
  

  getResults(query: string): any[]{
    let start: string = query
    let end: string = query + "\uf8ff"

    
    const posts = this.afs.collection<Post>('posts', ref => ref.orderBy('content').startAt(start).endAt(end)).valueChanges();
    const users = this.afs.collection<User>('users', ref => ref.orderBy('displayName').startAt(start).endAt(end)).valueChanges();

    return [posts, users]
  }

  
}
