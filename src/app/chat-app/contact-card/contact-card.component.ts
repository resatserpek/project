import { Component, OnInit, Input } from '@angular/core';

import { Chat } from 'src/models/chat';
import { Observable } from 'rxjs';
import { FileUploadService } from 'src/services/upload/file-upload.service';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss']
})
export class ContactCardComponent implements OnInit {

  @Input() chat: Chat;
  imageUrl: Observable<string|null>

  route: string;
  
  constructor(private imageService: FileUploadService) { }

  ngOnInit() {
    this.imageUrl = this.imageService.getMedia(this.chat.lastMessage[2]);
    this.route = this.chat.id;
  }

}
