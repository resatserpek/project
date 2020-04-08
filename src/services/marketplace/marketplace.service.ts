import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Item } from 'src/models/item';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as firebase from 'firebase';
import { AuthService } from '../user/auth.service';
import { User } from 'src/models/user';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MarketplaceService {

  private items: AngularFirestoreCollection<Item>;
  items$: Observable<Item[]>;

  constructor(private afs: AngularFirestore, private auth: AuthService, private router: Router) { 
    this.items = this.afs.collection('items');
    this.items$ = this.items.snapshotChanges().pipe(
      map(actions => actions.map( a =>{
        const data = a.payload.doc.data() as Item;
        const id = a.payload.doc.id;
        return {id, ...data};
      }))
    );
  }

  create(item){
    if(this.auth.checkAuth()){
      var timestamp = firebase.firestore.Timestamp.fromDate(new Date());
      var user: User = this.auth.getUser();

      this.afs.collection('items').add({
        categories: item.categories,
        date: timestamp,
        description: item.description,
        displayName: user.displayName,
        price: item.price,
        title: item.title,
        url: item.url,
        userId: user.uid,
        userPic: user.photoURL        
      })
    }else{
      this.router.navigate(['/login']);
    }
  }
}
