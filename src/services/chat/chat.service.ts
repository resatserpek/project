import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AuthService } from '../user/auth.service';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import * as firebase from 'firebase';
import { User } from 'src/models/user';
import { Observable } from 'rxjs';
import { Chat } from 'src/models/chat';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  
  private currentUser: User;

  private chatCollection: AngularFirestoreCollection<Chat>;
  chats$: Observable<Chat[]>;

  //https://fireship.io/lessons/build-group-chat-with-firestore/
  constructor(private afs: AngularFirestore, private auth: AuthService, private router: Router) {
    
    this.currentUser = this.auth.getUser();

    this.chatCollection = this.afs.collection('chats', ref => ref.where('users','array-contains',this.currentUser.uid))
    this.chats$ = this.chatCollection.snapshotChanges().pipe(
      map(actions => actions.map( a => {
        const data = a.payload.doc.data() 
        const id = a.payload.doc.id;
        const messages = this.chatCollection.doc(id).collection('messages')
        console.log(messages)
        return {id, ...data, ...messages};
      }))
    )
  }

  get(chatId){
    return this.afs
    .collection<any>('chats')
    .doc(chatId)
    .snapshotChanges()
    .pipe(
      map(doc => {
        return { id: doc.payload.id, ...doc.payload.data()};
      })
    )
  }

  // this is for creating a new chat instance with a chosen user
  async newMessage(userID: string){
    const { uid } = await this.auth.getUser();

    const data = {
      users: [uid, userID],
      createdAt: (firebase.firestore.Timestamp.fromDate(new Date()))
    }
  }

}