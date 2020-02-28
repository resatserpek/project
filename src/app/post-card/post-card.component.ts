import { Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {
  name: String = "Resat Serpek";
  date: String = "01.01.2020";
  text: String = "This is a song.";
  value = 0;

  constructor() {
    
  }

  ngOnInit() {
    this.value = 0;
  }

  increment (){
    
    this.value++;

  }
  play(){
    var myVar = setInterval(this.increment, 1000);
    
  }
}
    
    




