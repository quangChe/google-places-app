import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import bookmarksReducer from './reducers/bookmarks';

const configureStore = () => {
    return createStore(bookmarksReducer, applyMiddleware(thunk))
};

export default configureStore;