import {createFeatureSelector, createSelector} from '@ngrx/store';
import {Bookmark} from '../../model/bookmark.model';
import {BookmarkState} from '../state/bookmark.state';

export const selectState = createFeatureSelector<BookmarkState>('bookmarks');

export const selectAllBookmarks = createSelector(
  selectState,
  (state: BookmarkState) => state.bookmarkList
);

export const selectGroupedBookmarks = createSelector(
  selectAllBookmarks,
  (selectAllBookmarks: Bookmark[]) => {
    return selectAllBookmarks.reduce((bookmarks, bookmark: Bookmark) => {
      if (!bookmarks[bookmark.groupId]) {
        bookmarks[bookmark.groupId] = [];
      }
      bookmarks[bookmark.groupId].push(bookmark);
      return bookmarks;
    }, {});
  }
);

export const getBookmarkListCreate = (bookmarkList: Bookmark[], newBookmark: Bookmark) => {
  const newBookmarkList = [...bookmarkList];
  newBookmarkList.push(newBookmark);
  return newBookmarkList;
};
