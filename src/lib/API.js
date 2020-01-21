const proxy = 'https://cors-anywhere.herokuapp.com/';
const API_KEY = 'c8551146a39b9317f5bdc24d8823f014';
const WEATHER_API_URL = `${proxy}https://api.darksky.net/forecast//${API_KEY}/`;
const GEO_API_URL = `${proxy}https://darksky.net/geo?q=`;
const ADDRESS_API_URL = `${proxy}https://darksky.net/rgeo?hires=1`;

function getCoordinates(location) {
  return fetch(`${GEO_API_URL}${location}`)
    .then(response => response.json());
}

function getForecast(lat, lng) {
  return fetch(`${WEATHER_API_URL}${lat},${lng}?units=si`)
    .then(response => response.json());
}

function getAddress(lat, lng) {
  return fetch(`${ADDRESS_API_URL}&lat=${lat}&lon=${lng}`)
    .then(response => response.json());
}

export default {
  getAddress,
  getCoordinates,
  getForecast,
};
