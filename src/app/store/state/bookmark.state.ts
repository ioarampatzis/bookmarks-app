import {Bookmark} from '../../model/bookmark.model';
import {BookmarkGroup} from '../../model/bookmarkGroup.model';
import {BOOKMARK_GROUPS, BOOKMARKS} from '../../mock/bookmarks';

export interface BookmarkState {
  bookmarkList: Bookmark[];
  groupList: BookmarkGroup[];
}

export const initializeState = (): BookmarkState => {
  return ({
    bookmarkList: BOOKMARKS,
    groupList: BOOKMARK_GROUPS
  });
};
