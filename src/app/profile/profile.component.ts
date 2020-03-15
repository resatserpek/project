import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../services/user/auth.service';
import { auth } from 'firebase';
import { Observable } from 'rxjs';
import { Post } from 'src/models/post';
import { ProfileService } from '../services/profile/profile-service.service';
import { User } from 'src/models/user';
import { AngularFirestoreDocument } from '@angular/fire/firestore';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy {
  
 
  current: Observable<User>;
  constructor(private service: ProfileService) {
    this.current = this.service.user;

  }
   

  ngOnInit() {
    
  }
  ngOnDestroy(): void {
    this.current = null;
  }

}

