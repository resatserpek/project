import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/models/post';
import { User } from 'src/models/user';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {
  queryForm = new FormGroup({
    content: new FormControl('')
  });
  result: string;


  posts: Observable<Post[]>;
  users: Observable<User[]>;
  
  showResults: boolean = false;

  constructor(private searchService: SearchService) { }

  ngOnInit() {
  }

  search(input){
    this.showResults = false;
    let queryString = input.content
    this.result = queryString;
    this.showResults = true;
    
    [this.posts, this.users] = this.searchService.getResults(queryString)
    this
  }

}
