import {
  ADD_BOOKMARK,
  REMOVE_BOOKMARK,
  VIEW_PLACE_DETAILS
} from './actionTypes';


export const addBookmark = (place) => {
  return {
    type: ADD_BOOKMARK
  }
}

export const removeBookmark = (id) => {
  return {
    type: REMOVE_BOOKMARK
  }
}

export const viewPlace = (key) => {
  return {
    type: VIEW_PLACE_DETAILS,
  }
}