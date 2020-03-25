import { AngularFirestoreCollection } from '@angular/fire/firestore';
import { Message } from './message';

export interface Chat{
    createdAt: firebase.firestore.Timestamp;
    users: string[];
    messages: AngularFirestoreCollection<Message>;
}