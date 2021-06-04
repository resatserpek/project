import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/models/user';
import { Following } from 'src/models/following';
import { UserService } from '../services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.scss']
})
export class FollowersComponent implements OnInit {

  users: Observable<User[]>;
  follower: Observable<Following[]>;
  id: string;
  
  constructor(private userService: UserService,private route: ActivatedRoute) { 
    this.id = this.route.snapshot.paramMap.get('id');
    this.users = this.userService.getUsers();
    this.follower = this.userService.getFollowers(this.id);

  }

  ngOnInit() {
  }

}
