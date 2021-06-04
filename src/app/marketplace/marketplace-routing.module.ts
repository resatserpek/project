import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeedComponent } from './feed/feed.component';
import { SellComponent } from './sell/sell.component';
import { ItemComponent } from './item/item.component';


const routes: Routes = [
  { 
    path: '',
    component: FeedComponent, 
    pathMatch: 'full'},
  {
    path: 'sell',
    component: SellComponent,
    pathMatch: 'full'
  },
  {
    path: 'item/:id',
    component: ItemComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarketplaceRoutingModule { }
