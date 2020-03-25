import { Component, OnInit, Input } from '@angular/core';
import { ChatComponent } from '../chat/chat.component';
import { Chat } from 'src/models/chat';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss']
})
export class ContactCardComponent implements OnInit {

  @Input() chat: Chat;
  constructor() {
    
  }

  ngOnInit() {console.log(this.chat)
  }

}
