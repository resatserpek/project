import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AuthService } from '../user/auth.service';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import * as firebase from 'firebase';
import { User } from 'src/models/user';
import { Observable } from 'rxjs';
import { Chat } from 'src/models/chat';
import { Message } from 'src/models/message';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  
  private currentUser: User;

  private chatCollection: AngularFirestoreCollection<Chat>;
  chats$: Observable<Chat[]>;

  private messageCollection: AngularFirestoreCollection<Message>;
  messages$: Observable<Message[]>;

  //https://fireship.io/lessons/build-group-chat-with-firestore/
  constructor(private afs: AngularFirestore, private auth: AuthService, private router: Router) {
    
    this.currentUser = this.auth.getUser();

    this.chatCollection = this.afs.collection('chats', ref => ref.where('users','array-contains',this.currentUser.uid))
    this.chats$ = this.chatCollection.snapshotChanges().pipe(
      map(actions => actions.map( a => {
        const data = a.payload.doc.data() as Chat
        const id = a.payload.doc.id;
        return {id, ...data};
      }))
    )
  }

  getMessages(chatId){
    this.messageCollection = this.afs.collection('chats').doc(chatId).collection('messages');
    this.messages$ = this.messageCollection.snapshotChanges().pipe(
      map(actions => actions.map( a => {
        const data = a.payload.doc.data() as Message
        const id = a.payload.doc.id;
        return {id, ...data};
      }))
    )
    return this.messages$ 
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