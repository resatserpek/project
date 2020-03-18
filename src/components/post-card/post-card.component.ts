import { Component, OnInit, Input} from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { Post } from 'src/models/post';


@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {
  @Input() postInstance: Post;
  

  constructor() {
    
  }

  ngOnInit() {

  }
}
    
    




