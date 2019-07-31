import {
  ADD_BOOKMARK,
  REMOVE_BOOKMARK,
  VIEW_PLACE_DETAILS,
  VIEW_BOOKMARK_DETAILS,
} from '../actions/actionTypes';

import BookmarkCardImg from '../../../assets/image/bookmarkCard.png';

const initialState = {
  bookmarks: [],
  currentlyViewing: null
}

const addBookmark = (state, payload) => ({
  ...state,
  bookmarks: state.bookmarks.concat(payload)
});

const removeBookmark = (state, payload) => ({
  ...state,
  bookmarks: state.bookmarks.filter(bm => bm.key !== payload)
});

const changeCurrentlyViewing = {
  place: (state, payload) => ({
    ...state,
    currentlyViewing: payload
  }),
  bookmark: (state, payload) => {
    const bookmarkFound = state.find(place => place.key === payload);
    console.log(bookmarkFound);
    return {
      ...state,
      currentlyViewing: bookmarkFound
    }
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOKMARK:
      return addBookmark(state, action.payload);
    case REMOVE_BOOKMARK:
      return removeBookmark(state, action.payload);
    case VIEW_PLACE_DETAILS:
      return changeCurrentlyViewing.place(state, action.payload);
    case VIEW_BOOKMARK_DETAILS:
      return changeCurrentlyViewing.bookmark(state, action.payload);
    default: 
      return state;
  }
};

export default reducer;