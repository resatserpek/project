import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Chat } from 'src/models/chat';
import { ChatService } from 'src/services/chat/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  private chats$: Observable<Chat[]>
  constructor(private chatService: ChatService) { }

  ngOnInit() {
    this.chats$ = this.chatService.chats$;
  }

}
