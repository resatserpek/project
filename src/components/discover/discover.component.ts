import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.scss']
})
export class DiscoverComponent implements OnInit {
  clicked: boolean;


  constructor() {

  }

  ngOnInit() {
    
  }

  search(){
    this.clicked = !this.clicked
  }
}
