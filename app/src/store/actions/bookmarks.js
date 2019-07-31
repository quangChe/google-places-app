import {
  ADD_BOOKMARK,
  REMOVE_BOOKMARK,
  VIEW_PLACE_DETAILS
} from './actionTypes';


export const addBookmark = (place) => {
  return {
    type: ADD_BOOKMARK,
    payload: place,
  }
}

export const removeBookmark = (id) => {
  return {
    type: REMOVE_BOOKMARK,
    payload: id
  }
}

export const viewPlace = (key) => {
  return {
    type: VIEW_PLACE_DETAILS,
  }
}