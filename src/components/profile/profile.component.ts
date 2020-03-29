import { Component, OnInit } from '@angular/core';


import { Observable } from 'rxjs';

import { ProfileService } from '../../services/profile/profile-service.service';

// Model imports
import { User } from 'src/models/user';
import { Post } from 'src/models/post';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{
  
  current: Observable<User>;
  posts: Observable<Post[]>;

  profilePic: Observable<any>;

  constructor(private profileService: ProfileService) {
    
  }

  ngOnInit(): void {
    this.current = this.profileService.user;
    this.posts = this.profileService.posts;
    //this.profilePic = this.profileService.getProfilePic();
  }

}

