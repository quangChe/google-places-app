import {
  ADD_BOOKMARK,
  REMOVE_BOOKMARK,
  VIEW_PLACE_DETAILS
} from '../actions/actionTypes';

const initialState = {
  bookmarks: [],
  currentlyViewing: null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOKMARK:
      
    case REMOVE_BOOKMARK:

    case VIEW_PLACE_DETAILS:
      
    default: 
      return state;
  }
};

export default reducer;