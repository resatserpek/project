import { Component, OnInit, OnDestroy } from '@angular/core';
import { PostHandlerService } from '../../services/post/post-handler.service';
import { Post } from 'src/models/post';
import { Observable } from 'rxjs';
import { Following } from 'src/models/following';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy{
  
  
  posts: Observable<Post[]>; 
  followings: Observable<Following[]>;
  

  constructor(private postService: PostHandlerService) {
    this.posts = this.postService.posts;
    this.followings = this.postService.followingList;
  }

  ngOnInit(): void {
    
    console.log('Help')
  }

  ngOnDestroy(): void {
    console.log('Me')
  }
  
}
