import { Component, OnInit } from '@angular/core';
import { PostHandlerService } from '../../services/post/post-handler.service';

import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss']
})
export class PostCreateComponent implements OnInit {

  newPost = new FormGroup({
    content: new FormControl(''),
    mediaURL: new FormControl('')
  });

  constructor(private postService: PostHandlerService) { }

  ngOnInit() {
  }

  share(postForm){
    this.postService.create(postForm.value);
  }

}
