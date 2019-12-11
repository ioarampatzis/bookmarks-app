import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Bookmark} from '../../model/bookmark.model';
import {Subscription} from 'rxjs';
import {BookmarkState} from '../../store/state/bookmark.state';
import {BookmarkGroup} from '../../model/bookmarkGroup.model';
import {STORE} from '../../constants/constants';

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.scss']
})
export class BookmarkComponent implements OnInit {
  bookmarkListSubscription: Subscription;
  groupListSubscription: Subscription;

  bookmarkList: Bookmark[];
  groupList: BookmarkGroup[];

  constructor(private store: Store<BookmarkState>) { }

  ngOnInit() {
    this.bookmarkListSubscription = this.store.subscribe(x => this.bookmarkList = x[STORE.BOOKMARKS].bookmarkList);
    this.groupListSubscription =  this.store.pipe().subscribe(x => this.groupList = x[STORE.BOOKMARKS].groupList);
  }

}
