import {Action} from '@ngrx/store';

export const GET_BOOKMARKS = '[Bookmark List] GET_BOOKMARKS';
export const SET_SELECTED_BOOKMARK = '[Bookmark] SET_SELECTED_BOOKMARK';

export class GetBookmarks implements Action {
  readonly type = GET_BOOKMARKS;

  constructor() { }
}

export class SelectedBookmark implements Action {
  readonly type = SET_SELECTED_BOOKMARK;

  constructor() { }
}

export type BookmarkActions = GetBookmarks | SelectedBookmark;
