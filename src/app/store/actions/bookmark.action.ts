import {Action} from '@ngrx/store';
import {Bookmark} from '../../model/bookmark.model';

export const CREATE_BOOKMARK = '[Bookmark] CREATE_BOOKMARK';
export const DELETE_BOOKMARK = '[Bookmark] DELETE_BOOKMARK';

export class CreateBookmark implements Action {
  readonly type = CREATE_BOOKMARK;
  constructor(public bookmark: Bookmark) { }
}

export class DeleteBookmark implements Action {
  readonly type = DELETE_BOOKMARK;
  constructor(public bookmarkId: string) { }
}

export type BookmarkActions = CreateBookmark | DeleteBookmark;
