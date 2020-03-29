import { AngularFirestoreCollection } from '@angular/fire/firestore';
import { Message } from './message';

export interface Chat{
    uid: string;
    createdAt: firebase.firestore.Timestamp;
    users: string[];
    messages: AngularFirestoreCollection<Message>;
    lastMessage: string[];
}