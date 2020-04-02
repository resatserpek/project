import { AngularFirestoreCollection } from '@angular/fire/firestore';
import { Message } from './message';

export interface Chat{
    id: string;
    createdAt: firebase.firestore.Timestamp;
    users: string[];
    messages: AngularFirestoreCollection<Message>;
    lastMessage: string[];
}