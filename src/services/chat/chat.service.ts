import { Injectable, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AuthService } from '../user/auth.service';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import * as firebase from 'firebase';
import { User } from 'src/models/user';
import { Observable } from 'rxjs';
import { Chat } from 'src/models/chat';
import { Message } from 'src/models/message';

@Injectable({
  providedIn: 'root'
})
export class ChatService implements OnInit{
  
  private currentUser: User;

  private chatCollection: AngularFirestoreCollection<Chat>;
  chats$: Observable<Chat[]>;

  private messageCollection: AngularFirestoreCollection<Message>;
  messages$: Observable<Message[]>;

  //https://fireship.io/lessons/build-group-chat-with-firestore/
  constructor(private afs: AngularFirestore, private auth: AuthService, private router: ActivatedRoute) {
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
  ngOnInit(): void {
    
  }

  getMessages(chatId){

    
    this.messageCollection = this.afs.collection('chats').doc(chatId).collection("messages", ref => ref.orderBy('time','asc'));
    this.messages$ = this.messageCollection.snapshotChanges().pipe(
      map(actions => actions.map( a => {
        const data = a.payload.doc.data() as Message
        data.isCurrent = this.isCurrentUser(data.displayName);
        const id = a.payload.doc.id;
        return {id, ...data};
      }))
    )
    return this.messages$ 

  }

  // this is for creating a new chat instance with a chosen user
  newMessage(chatID: string, message: string){
    const { displayName } = this.auth.getUser();

    const data: Message = {
      content: message,
      displayName: displayName,
      time: firebase.firestore.Timestamp.fromDate(new Date())
    }

    this.afs.collection('chats').doc(chatID).collection('messages').add(data);

  }

  // This method checks if the given user uid is the same of the current authenticated user
  // If same give true
  // This will used in message objects to be able to display user custom messages in UI etc.
  isCurrentUser(name: string) {
    const { displayName } = this.auth.getUser();
    if (displayName !== name){
      return false
    }else{
      return true
    }
  }



}