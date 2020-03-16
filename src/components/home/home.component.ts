import { Component } from '@angular/core';
import { PostHandlerService } from '../../services/post/post-handler.service';
import { Post } from 'src/models/post';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent{
  
  posts: Observable<Post[]>; 
  
  constructor(private postService: PostHandlerService) { 
    this.posts = this.postService.posts;
  }

  
}
