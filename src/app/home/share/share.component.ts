import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { PostHandlerService } from 'src/services/post/post-handler.service';
import * as firebase from 'firebase';
import { AuthService } from 'src/services/user/auth.service';
import { Post } from 'src/models/post';
import { FileUploadService } from 'src/services/upload/file-upload.service';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss']
})
export class ShareComponent implements OnInit {

  newPost = new FormGroup({
    content: new FormControl(''),
    mediaURL: new FormControl('')

  });

  newSong = new FormGroup({
    content: new FormControl(''),
    mediaURL: new FormControl('')
  });
  
  
  file: File;
  

  constructor(private uploader: FileUploadService ,private postService: PostHandlerService, private auth: AuthService) { }

  ngOnInit() {
  }

  sharePost(postForm){
    const timestamp = firebase.firestore.Timestamp.fromDate(new Date());

    var path: string = '';
    
    if(postForm.mediaURL !== '' ){
      console.log(postForm.mediaURL)
      path = `images/content/${this.file.name}`;
      this.uploader.upload(path, this.file);
    }
    const userId = this.auth.getUser();

    const post: Post = {
      userID: userId.uid,
      displayName: userId.displayName,
      content: postForm.content,
      mediaURL: path,
      time: timestamp,
      isSong: false
    }

    
    this.postService.create(post);
    //console.log(post)
    this.newPost =  new FormGroup({
      content: new FormControl(''),
      mediaURL: new FormControl('')
  
    });
  }

  shareSong(songForm){
    const timestamp = firebase.firestore.Timestamp.fromDate(new Date());
    
    
    const path = `music/${this.file.name}`;
    const userId = this.auth.getUser();

    const post: Post = {
      userID: userId.uid,
      displayName: userId.displayName,
      content: songForm.content,
      mediaURL: path,
      time: timestamp,
      isSong: true
    }
    
    
    this.uploader.upload(path, this.file);
    this.postService.create(post);
     
    this.newSong =  new FormGroup({
      content: new FormControl(''),
      mediaURL: new FormControl('')  
    });
    
  }

  fileUpload(event){
    this.file = event.target.files[0];
    console.log(`File to be updated ${this.file.name}`)
  }

}
