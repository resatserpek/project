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
import { FileUploadService } from '../upload/file-upload.service';

@Injectable({
  providedIn: 'root'
})
export class MarketplaceService {

  private items: AngularFirestoreCollection<Item>;
  items$: Observable<Item[]>;

  constructor(private afs: AngularFirestore, private auth: AuthService, private fileUpload: FileUploadService,private router: Router) { 
    this.items = this.afs.collection('items');
    this.items$ = this.items.snapshotChanges().pipe(
      map(actions => actions.map( a =>{
        const data = a.payload.doc.data() as Item;
        const id = a.payload.doc.id;
        return {id, ...data};
      }))
    );
  }

  create(item: Item, fileName: string,file: File){
    if(this.auth.checkAuth()){
      this.afs.collection('items').add({
        categories: item.categories,
        date: item.date,
        description: item.description,
        displayName: item.displayName,
        price: item.price,
        title: item.title,
        url: item.url,
        userId: item.userId,
        userPic: item.userPic        
      })

      this.fileUpload.upload(fileName, file)
      this.router.navigate(['/marketplace']);
    }else{
      this.router.navigate(['/login']);
    }
  }
}
