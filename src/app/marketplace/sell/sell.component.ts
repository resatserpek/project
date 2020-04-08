import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.scss']
})
export class SellComponent implements OnInit {
  itemForm: FormGroup({
    title: new FormControl('')
  })
  constructor() { }

  ngOnInit() {
  }

}
