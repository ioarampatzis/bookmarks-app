import {initializeState} from '../state/bookmark.state';
import {BookmarkActions, CREATE_BOOKMARK, DELETE_BOOKMARK} from '../actions/bookmark.action';
import {getBookmarkListCreate} from '../selectors/bookmark.selectors';

const initialState = initializeState();

export function BookmarkReducer(state = initialState,
                                action: BookmarkActions) {

  switch (action.type) {

    case CREATE_BOOKMARK:
      return {
        ...state,
        bookmarkList: getBookmarkListCreate(state.bookmarkList, action.bookmark)
      };

    case DELETE_BOOKMARK:
      return {
        ...state,
        bookmarkList: state.bookmarkList.filter(bookmark => bookmark.id !== action.bookmarkId)
      };

    default:
      return state;
  }
}
