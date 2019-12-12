import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {BookmarkState} from '../../../store/state/bookmark.state';
import {STORE} from '../../../constants/constants';
import {MatDialogRef} from '@angular/material/dialog';
import * as BookmarkActions from '../../../store/actions/bookmark.action';
import * as uuid from 'uuid';

@Component({
  selector: 'app-bookmark-dialog',
  templateUrl: './bookmark-dialog.component.html',
  styleUrls: ['./bookmark-dialog.component.scss']
})
export class BookmarkDialogComponent implements OnInit {
  bookmarkCreationEvent = new EventEmitter();

  groupList: string[];
  bookmarkForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    url: new FormControl('', [Validators.required]),
    groupId: new FormControl('', [Validators.required])
  });

  constructor(
    private store: Store<BookmarkState>,
    private dialog: MatDialogRef<BookmarkDialogComponent>) { }

  ngOnInit() {
    this.store.subscribe(store => this.groupList = store[STORE.BOOKMARKS].groupList);
  }

  save() {
    if (this.bookmarkForm.invalid) {
      return;
    }

    if (!this.bookmarkForm.get('url').value.startsWith('http')) {
      const url = this.bookmarkForm.get('url').value;
      this.bookmarkForm.get('url').setValue('https://' + url);
    }

    const formValues = this.bookmarkForm.value;
    this.store.dispatch(
      new BookmarkActions.CreateBookmark({
        id: uuid.v4(),
        name: formValues.name,
        url: formValues.url,
        groupId: formValues.groupId
      })
    );
    this.bookmarkCreationEvent.emit();
    this.dialog.close('bookmarkSaved');
  }

  close() {
    this.dialog.close();
  }

  getErrorMessage(formControl: string) {
    return this.bookmarkForm.get(formControl).hasError('required') && 'Please enter a value';
  }

}
