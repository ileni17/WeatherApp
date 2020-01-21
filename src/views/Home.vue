<template>
<div class="home">
  <div class="input-group mb-3 col-7 mx-auto" style="margin-top: 20px;">
  <input v-model="location" type="text" class="form-control" placeholder="Enter location">
  <div class="input-group-append">
    <button @click="updateLocation" class="btn btn-outline-secondary" type="button">Search</button>
  </div>
</div>
  <div class="col-7 mx-auto text-center" style="margin-top: 20px;" v-if="forecast">
    <div class="card text-white bg-dark mb-3 ">
      <div class="card-header">Current Weather: <br> {{address.street}} {{address.name}}</div>
      <div class="card-body">
        <h4 class="card-title">{{forecast.currently.summary}}</h4>
        <div class="card-text icon-temp">
          {{icons[forecast.currently.icon]}}
          {{forecast.currently.temperature}} °C
        </div>
        <div class="card-text text-left" style="margin-top: 20px;">
          Precipitation: {{forecast.currently.precipProbability}} %<br>
          Humidity: {{forecast.currently.humidity}} <br>
          Wind: {{forecast.currently.windSpeed}} m/s
        </div>
    </div>
  </div>
</div>
</div>
</template>

<script>
import API from '@/lib/API';

export default {
  name: 'home',
  data() {
    return {
      location: '',
      address: '',
      forecast: null,
      icons: {
        'clear-day': '🌞',
        'clear-night': '🌃',
        rain: '🌧️',
        snow: '❄️',
        sleet: '⛈️',
        wind: '🌬️',
        fog: '🌫️',
        cloudy: '☁️',
        'partly-cloudy-day': '⛅',
        'partly-cloudy-night': '☁️',
      },
    };
  },
  mounted() {
    this.loadWeather('45.3271', '14.4422');
  },
  methods: {
    loadWeather(lat, lng) {
      API.getAddress(lat, lng).then((result) => {
        this.address = result;
      });
      API.getForecast(lat, lng).then((result) => {
        this.forecast = result;
      });
    },
    updateLocation() {
      API.getCoordinates(this.location).then((result) => {
        this.loadWeather(result.latitude, result.longitude);
      });
    },
  },
};
</script>

<style>
.icon-temp {
  font-size: 4em;
}
</style>
