import axios from 'axios';
import { API_KEY } from '../API_KEY';

export const placesAutocomplete = async (val) => {
  try {
    const response = await axios.get(`https://maps.googleapis.com/maps/api/place/autocomplete/json?key=${API_KEY}&input=${val}`);
    return response.data.predictions;
  } catch (e) {
    console.error(e);
  }
}

export const findPlace = async (val) => {
  try {
    const response = await axios.get(`https://maps.googleapis.com/maps/api/place/findplacefromtext/json?key=${API_KEY}&inputtype=textquery&input=${val}`);
    return response.data.candidates[0].place_id
  } catch (e) {
    console.error(e);
  }
}

export const getPlaceDetails = async (key, dimensions) => {
  try {
    const response = await axios.get(`https://maps.googleapis.com/maps/api/place/details/json?key=${API_KEY}&placeid=${key}`); 
    const data = response.data.result;
    let photo = `https://picsum.photos/${dimensions.width}/${dimensions.height}`;
    
    if (data.photos && data.photos.length) {
      const photoResponse = await axios.get(`https://maps.googleapis.com/maps/api/place/photo?key=${API_KEY}&photoreference=${data.photos[0].photo_reference}&maxheight=${dimensions.height}`);
      photo = photoResponse.config.url;
    } 

    return {
      key,
      photo: photo,
      name: data.name,
      city: data.address_components[3].long_name,
      state: data.address_components[5].long_name,
      landmark: data.address_components[2].long_name,
      rating: data.rating,
      address: data.formatted_address
    };
  } catch (e) {
    console.error(e);
  }
}