import {
  ADD_BOOKMARK,
  REMOVE_BOOKMARK,
  VIEW_PLACE_DETAILS,
  VIEW_BOOKMARK_DETAILS,
} from './actionTypes';
import { getPlaceDetails } from '../../../util/api';


export const addBookmark = (place) => {
  return {
    type: ADD_BOOKMARK,
    payload: place,
  }
}

export const removeBookmark = (key) => {
  return {
    type: REMOVE_BOOKMARK,
    payload: key
  }
}

export const viewBookmark = (key) => {
  return {
    type: VIEW_BOOKMARK_DETAILS,
    payload: key
  }
}

export const viewPlace = (key, deviceHeight) => {
  return async (dispatch) => {
    try {
      const placeDetails = await getPlaceDetails(key, deviceHeight);
      dispatch({
        type: VIEW_PLACE_DETAILS,
        payload: placeDetails
      })
    } catch (e) {
      console.error(e);
    }
  }
}