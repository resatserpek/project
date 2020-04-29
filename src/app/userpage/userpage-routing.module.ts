import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { FollowersComponent } from './followers/followers.component';
import { FollowingComponent } from './following/following.component';


const routes: Routes = [
  { 
    path: '', 
    component: UserComponent,
    pathMatch: 'full'
  }, 
  {
    path: 'followers/:id', 
    component: FollowersComponent,
    pathMatch: 'full'
  },
  {
    path: 'following/:id', 
    component: FollowingComponent,  
    pathMatch: 'full'
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserpageRoutingModule { }
