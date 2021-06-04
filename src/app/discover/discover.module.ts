import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiscoverRoutingModule } from './discover-routing.module';
import { PanelComponent } from './panel/panel.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [PanelComponent],
  imports: [
    CommonModule,
    DiscoverRoutingModule,
    SharedModule
  ]
})
export class DiscoverModule { }
