import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Chat } from 'src/models/chat';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  @Input() chats$: Observable<Chat[]>;

  
  constructor() { }

  ngOnInit() {
  }

}
