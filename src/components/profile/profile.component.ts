import { Component } from '@angular/core';


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
export class ProfileComponent {
  current: Observable<User>;
  posts: Observable<Post[]>;

  constructor(private profileService: ProfileService) {
    this.current = this.profileService.user;
    this.posts = this.profileService.posts;
  }

}

