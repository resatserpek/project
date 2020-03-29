import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ChatService } from 'src/services/chat/chat.service';
import { async } from 'q';
import { Observable } from 'rxjs';
import { Chat } from 'src/models/chat';
import { Message } from 'src/models/message';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {


  // Testing table material
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  
  private chatId: string;
  private chats$: Observable<Chat[]>;

  message = new FormGroup({
    content: new FormControl('')
  });
  messages$: Observable<Message[]>;

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

  openMessages(id: string){
    this.messages$ = this.chatService.getMessages(id);
  }
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];


interface MessageBody{
  //chatId;
  
}