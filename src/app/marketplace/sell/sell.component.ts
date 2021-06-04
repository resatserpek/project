import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FileUploadService } from 'src/services/upload/file-upload.service';
import { MarketplaceService } from 'src/services/marketplace/marketplace.service';
import { AuthService } from 'src/services/user/auth.service';
import * as firebase from 'firebase';
import { Item } from 'src/models/item';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.scss']
})
export class SellComponent implements OnInit {
  itemForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    category: new FormControl(''),
    price: new FormControl(''),
    url: new FormControl(''),
  })
  file: File;
  constructor(private marketService: MarketplaceService, private auth: AuthService) { 

  }

  ngOnInit() {
  }

  createItem(form){
    const timestamp = firebase.firestore.Timestamp.fromDate(new Date());
    
    
    const path = `marketplace/${this.file.name}`;
    const user = this.auth.getUser()
    
    const item: Item = {
      categories: [form.category],
      date: timestamp,
      description: form.description,
      displayName: user.displayName,
      price: form.price,
      title: form.title,
      url: path,
      userId: user.uid,
      userPic: user.photoURL        
    }
    this.marketService.create(item, path, this.file);
    
  }

  fileUpload(event){
    this.file = event.target.files[0];
    console.log(`File to be updated ${this.file.name}`)
  }
} 
