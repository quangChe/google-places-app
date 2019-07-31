import {
  ADD_BOOKMARK,
  REMOVE_BOOKMARK,
  VIEW_PLACE_DETAILS
} from './actionTypes';
import axios from 'axios';
import { API_KEY } from '../../../API_KEY';

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

export const viewPlace = (key, height) => {
  return async (dispatch) => {
    try {
      const place = await axios.get(`https://maps.googleapis.com/maps/api/place/details/json?key=${API_KEY}&placeid=${key}`); 
      const photoRef = place.data.result.photos[0].photo_reference;
      const photo = await axios.get(`https://maps.googleapis.com/maps/api/place/photo?key=${API_KEY}&photoreference=${photoRef}&maxheight=${height}`)
      // dispatch()
      console.log(photo.config.url);
    } catch (e) {
      console.error(e);
    }
  }
}