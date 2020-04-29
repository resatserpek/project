import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserpageRoutingModule } from './userpage-routing.module';
import { UserComponent } from './user/user.component';

import { SharedModule } from '../shared/shared.module';
import { FollowComponent } from './follow/follow.component';
import { FollowersComponent } from './followers/followers.component';
import { FollowingComponent } from './following/following.component';
import { UserItemComponent } from './user-item/user-item.component';



@NgModule({
  declarations: [UserComponent, FollowComponent, FollowersComponent, FollowingComponent, UserItemComponent],
  imports: [
    CommonModule,
    UserpageRoutingModule,
    SharedModule
  ]  
})
export class UserpageModule { }
