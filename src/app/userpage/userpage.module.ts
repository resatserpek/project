import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserpageRoutingModule } from './userpage-routing.module';
import { UserComponent } from './user/user.component';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    UserpageRoutingModule,
    SharedModule,

  ]
})
export class UserpageModule { }
