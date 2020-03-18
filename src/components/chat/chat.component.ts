import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  message = new FormGroup({
    content: new FormControl('')
  });

  // https://www.youtube.com/watch?v=LKAXg2drQJQ
  constructor() { }

  ngOnInit() {
  }

}
