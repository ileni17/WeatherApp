<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <router-link to="/" class="navbar-brand">WeatherApp</router-link>
      <router-link to="about" class="navbar-brand">About</router-link>
    </nav>
    <main class="container">
      <router-view/>
    </main>
  </div>
</template>
<style>
.container {
  margin-top: 2;
}
</style>
