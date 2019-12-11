import {Action} from '@ngrx/store';
import {initializeState} from '../state/bookmark.state';

const initialState = initializeState();

export function BookmarkReducer(state = initialState,
                                action: Action) {

  switch (action.type) {

    default:
      return state;
  }
}
