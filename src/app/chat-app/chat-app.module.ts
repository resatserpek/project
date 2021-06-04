import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatAppRoutingModule } from './chat-app-routing.module';
import { ChatComponent } from './chat/chat.component';
import { ContactCardComponent } from './contact-card/contact-card.component';
import { MessageDisplayComponent } from './message-display/message-display.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { MaterialModule } from '../material.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [ChatComponent, ContactCardComponent, MessageDisplayComponent, ContactListComponent],
  imports: [
    CommonModule,
    ChatAppRoutingModule,
    SharedModule
  ],
  /*exports: [
    ChatComponent
  ]*/

})
export class ChatAppModule { }
