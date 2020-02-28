import { Component, OnInit } from '@angular/core';
import { DataHandlerService } from '../services/data/data-handler.service';


@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.scss']
})
export class DiscoverComponent implements OnInit {
  posts: any;
  constructor(private data: DataHandlerService) {
    this.posts = data.getPosts;
  }

  ngOnInit() {
    
  }

}
