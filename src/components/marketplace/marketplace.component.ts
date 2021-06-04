import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.scss']
})
export class MarketplaceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  counterValue = 0;

  @Input()
  get counter() {
    return this.counterValue;
  }

  @Output() counterChange = new EventEmitter();

  set counter(val) {
    this.counterValue = val;
    this.counterChange.emit(this.counterValue);
  }
}
