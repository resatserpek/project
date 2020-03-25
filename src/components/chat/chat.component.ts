import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ChatService } from 'src/services/chat/chat.service';
import { async } from 'q';
import { Observable } from 'rxjs';
import { Chat } from 'src/models/chat';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  
  private chatId: string;
  private chats$: Observable<Chat[]>;

  message = new FormGroup({
    content: new FormControl('')
  });

  // https://www.youtube.com/watch?v=LKAXg2drQJQ
  constructor(private chatService: ChatService) { 
    console.log('Attached chat-service');
    this.chats$ = this.chatService.chats$;
  }

  ngOnInit() {
  }

  sendMessage(){
    var message: string = this.message.value.content;
    const messageBody: MessageBody = {

    }
    if(message !== ""){
      console.log(this.message.value);
    } 
  }
}

interface MessageBody{
  //chatId;
  
}