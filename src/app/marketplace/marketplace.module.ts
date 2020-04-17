import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarketplaceRoutingModule } from './marketplace-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FeedComponent } from './feed/feed.component';
import { ItemListComponent } from './item-list/item-list.component';
import { SellComponent } from './sell/sell.component';
import { ItemComponent } from './item/item.component';
import { AuthService } from 'src/services/user/auth.service';



@NgModule({
  declarations: [FeedComponent, ItemListComponent, SellComponent, ItemComponent],
  imports: [
    CommonModule,
    MarketplaceRoutingModule,
    SharedModule
  ],
  exports: [],
  providers:[]
})
export class MarketplaceModule { }
