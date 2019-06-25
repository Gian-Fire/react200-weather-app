const axios = require('axios');

export const getWeather = (city) => {
  return {
    type: 'GET_WEATHER',
    payload: axios.get(`/weather/${city}`)
  }
}

export const updateSearchInput = (city) => {
  return {
    type: 'UPDATE_CITY_INPUT',
    payload: { city }
  }
}