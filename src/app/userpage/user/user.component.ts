import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { User } from 'src/models/user';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';
import { Post } from 'src/models/post';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user: Observable<User>;
  posts: Observable<Post[]>;

  constructor(private userService: UserService, private route: ActivatedRoute) {
    
  }

  ngOnInit() {
    var id = this.route.snapshot.paramMap.get('id');
    this.user = this.userService.getUser(id)
    this.posts = this.userService.getPosts(id);
  }

}
