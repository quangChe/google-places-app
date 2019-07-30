import { createStore, combineReducers } from 'redux';

import bookmarksReducer from './reducers/bookmarks';

const configureStore = () => {
    return createStore(bookmarksReducer);
};

export default configureStore;