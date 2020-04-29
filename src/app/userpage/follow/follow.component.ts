import { Component, OnInit, Input } from '@angular/core';
import { Following } from 'src/models/following';
import { User } from 'src/models/user';
import { PostHandlerService } from 'src/services/post/post-handler.service';
import { AuthService } from 'src/services/user/auth.service';

@Component({
  selector: 'app-follow',
  templateUrl: './follow.component.html',
  styleUrls: ['./follow.component.scss']
})
export class FollowComponent implements OnInit {

  @Input() user: User;
  @Input() follows: Following[];

  isFollowing: boolean;

  constructor(private followingService: PostHandlerService, private auth: AuthService) { 
    
  }

  ngOnInit() {
    this.isFollowing = this.checkFollowing(this.follows, this.user.uid);
  }

  checkFollowing(following: Following[], uid: string): boolean{

    let bool: boolean = false;
    
    following.forEach(f => {
      if(f.followingId === uid){
        bool = true;
      }
    });
    
    return bool
  }

  follow(){
    const uid: string = this.auth.getUser().uid

    const newFollowing: Following = {
      followingId: this.user.uid,
      userId: uid
    }
    //console.log(newFollowing)
    this.followingService.follow(newFollowing);
    this.isFollowing = true;

  }

}
