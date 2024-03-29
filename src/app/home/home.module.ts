import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { FeedComponent } from '../home/feed/feed.component';
import { ShareComponent } from './share/share.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [FeedComponent, ShareComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
