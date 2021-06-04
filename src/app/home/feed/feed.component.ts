import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/models/post';
import { Following } from 'src/models/following';
import { PostHandlerService } from 'src/services/post/post-handler.service';
import { User } from 'src/models/user';
import { AuthService } from 'src/services/user/auth.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  posts: Observable<Post[]>; 
  followings: Observable<Following[]>;
  user: User;
  
  constructor(private postService: PostHandlerService, private auth: AuthService) {
    this.posts = this.postService.posts;
    this.followings = this.postService.followingList;
    this.user = this.auth.getUser();
  }

  ngOnInit() {
  }

  isFollowing(f: Following, id: string): boolean{
    console.log(f, id)
    return f.followingId === id;
  }

}
