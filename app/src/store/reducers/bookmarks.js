import {
  ADD_BOOKMARK,
  REMOVE_BOOKMARK,
  VIEW_PLACE_DETAILS
} from '../actions/actionTypes';

import BookmarkCardImg from '../../../assets/image/bookmarkCard.png';

const initialState = {
  bookmarks: [
    {key: '1', image: BookmarkCardImg, details: { name: 'Royals Hot Chicken', rating: 4.3, location: 'Louisville, Kentucky'}},
    {key: '2', image: BookmarkCardImg, details: { name: 'Royals Hot Chicken', rating: 4.3, location: 'Louisville, Kentucky'}},
    {key: '3', image: BookmarkCardImg, details: { name: 'Royals Hot Chicken', rating: 4.3, location: 'Louisville, Kentucky'}},
    {key: '4', image: BookmarkCardImg, details: { name: 'Royals Hot Chicken', rating: 4.3, location: 'Louisville, Kentucky'}},
    {key: '5', image: BookmarkCardImg, details: { name: 'Royals Hot Chicken', rating: 4.3, location: 'Louisville, Kentucky'}},
    {key: '6', image: BookmarkCardImg, details: { name: 'Royals Hot Chicken', rating: 4.3, location: 'Louisville, Kentucky'}}
  ],
  currentlyViewing: null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOKMARK:
      
    case REMOVE_BOOKMARK:
      return {
        ...state,
        bookmarks: state.bookmarks.filter(bm => bm.key !== action.payload)
      }
    case VIEW_PLACE_DETAILS:

    default: 
      return state;
  }
};

export default reducer;