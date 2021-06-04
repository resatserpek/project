import { Component, OnInit, Input } from '@angular/core';
import { ChatComponent } from '../chat/chat.component';
import { Chat } from 'src/models/chat';
import { FileUploadService } from 'src/services/upload/file-upload.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss']
})
export class ContactCardComponent implements OnInit {

  @Input() chat: Chat;
  imageUrl: Observable<string|null>
  constructor(private imageService: FileUploadService) {
    
  }

  ngOnInit() {
    console.log(this.chat)
    this.imageUrl = this.imageService.getMedia(this.chat.lastMessage[2]);
  }

}
