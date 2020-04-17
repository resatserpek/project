import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ChatService } from 'src/services/chat/chat.service';
import { Observable } from 'rxjs';
import { Message } from 'src/models/message';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-message-display',
  templateUrl: './message-display.component.html',
  styleUrls: ['./message-display.component.scss']
})
export class MessageDisplayComponent implements OnInit {
  message = new FormGroup({
    content: new FormControl('')
  });

  messages: Observable<Message[]>;
  chatId: string;

  constructor(private chatService: ChatService, private route: ActivatedRoute) { 

    //this.messages = chatService.getMessages();
    

  }

  ngOnInit() {
    //https://medium.com/better-programming/angular-6-url-parameters-860db789db85
    this.chatId = this.route.snapshot.paramMap.get('id');
    this.messages = this.chatService.getMessages(this.chatId);
  }

  sendMessage(message){    
    if(message.content !== ""){
      this.chatService.newMessage(this.chatId, message.content)
      this.message.reset()
    } 
  }
  

}
