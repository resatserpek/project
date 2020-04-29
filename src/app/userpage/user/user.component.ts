import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { User } from 'src/models/user';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { Post } from 'src/models/post';
import { Following } from 'src/models/following';
import { PostHandlerService } from 'src/services/post/post-handler.service';
import { AuthService } from 'src/services/user/auth.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user: Observable<User>;
  posts: Observable<Post[]>;

  following$: Observable<Following[]>;

  id: string; 

  constructor(
    private auth: AuthService,
    private userService: UserService, 
    private route: ActivatedRoute,
    private router: Router, 
    private followingService: PostHandlerService
    ) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.user = this.userService.getUser(this.id)
    if(this.auth.getUser().uid === this.id){
      this.router.navigate(['/profile'])
    }
    this.posts = this.userService.getPosts(this.id);
    this.following$ = this.followingService.followingList


  }

  ngOnInit() {
    
  }

  


  


}
