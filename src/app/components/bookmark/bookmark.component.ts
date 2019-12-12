import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {BookmarkState} from '../../store/state/bookmark.state';
import {BookmarkGroup} from '../../model/bookmarkGroup.model';
import {STORE} from '../../constants/constants';
import * as BookmarkActions from '../../store/actions/bookmark.action';
import {selectGroupedBookmarks} from '../../store/selectors/bookmark.selectors';
import {BookmarkDialogComponent} from '../dialog/bookmark-dialog/bookmark-dialog.component';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.scss']
})
export class BookmarkComponent implements OnInit {
  groupList: BookmarkGroup[];
  // Gets the booksmarks grouped by grouId in an Object of the form {[groupId] : Bookmark[]}
  groupedBookmarks: object;

  displayedColumns = ['name', 'url', 'actions'];

  constructor(
    private store: Store<BookmarkState>,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {
  }

  ngOnInit() {
    this.store.subscribe(store => this.groupList = store[STORE.BOOKMARKS].groupList);

    this.store.pipe(select(selectGroupedBookmarks)).subscribe(groupedBookmarks => {
      this.groupedBookmarks = groupedBookmarks;
    });
  }

  delete(bookmarkId: string) {
    this.store.dispatch(
      new BookmarkActions.DeleteBookmark(bookmarkId)
    );

    // Display message when a Bookmark is deleted
    this.snackBar.open('Bookmark successfully deleted!', '', {
      duration: 3000,
    });
  }

  // Opens the Dialog for the Bookmark creation
  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = '400px';
    dialogConfig.height = '350px';

    const dialogRef = this.dialog.open(BookmarkDialogComponent, dialogConfig);

    // Display message when a Bookmark is saved
    const dialogSubscription = dialogRef.componentInstance.bookmarkCreationEvent.subscribe(() => {
      this.snackBar.open('Bookmark successfully saved!', '', {
        duration: 3000,
      });
    });

    dialogRef.afterClosed().subscribe(() => {
      dialogSubscription.unsubscribe();
    });
  }
}
