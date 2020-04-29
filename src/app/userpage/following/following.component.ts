import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/models/user';
import { Following } from 'src/models/following';
import { UserService } from '../services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-following',
  templateUrl: './following.component.html',
  styleUrls: ['./following.component.scss']
})
export class FollowingComponent implements OnInit {

  users: Observable<User[]>;
  following: Observable<Following[]>;
  id: string;
  
  constructor(private userService: UserService,private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.users = this.userService.getUsers();
    this.following = this.userService.getFollowings(this.id);

  }

  ngOnInit() {
    
  }

}
