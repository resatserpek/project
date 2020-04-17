import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/models/post';
import { Following } from 'src/models/following';
import { PostHandlerService } from 'src/services/post/post-handler.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  posts: Observable<Post[]>; 
  followings: Observable<Following[]>;
  
  constructor(private postService: PostHandlerService) {
    this.posts = this.postService.posts;
    this.followings = this.postService.followingList;
  }

  ngOnInit() {
  }

}
