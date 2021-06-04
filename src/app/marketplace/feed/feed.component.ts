import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable, BehaviorSubject } from 'rxjs';
import { Item } from 'src/models/item';
import { AngularFirestore } from '@angular/fire/firestore';
import { combineLatest, switchMap } from 'rxjs/operators';
import { MarketplaceService } from 'src/services/marketplace/marketplace.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  content: FormControl 
  //https://github.com/angular/angularfire/blob/HEAD/docs/firestore/querying-collections.md

  items$: Observable<Item[]>

  constructor(private market: MarketplaceService) {
    this.items$ = this.market.items$;
  }


  ngOnInit() {
  }

}
