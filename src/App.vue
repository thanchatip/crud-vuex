<template>
  <div id="app">
      <nav class="navbar sticky-top navbar-expand-sm navbar navbar-dark bg-dark mb-4">
      <a class="navbar-brand" href="#">
        <router-link :to="{ name: 'Home'}" class="navbar-brand">
        <h4> 17carats </h4>
      </router-link>
      </a>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link :to="{ name: 'Home'}" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'Create' }" class="nav-link">Register</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<style>
@import url("https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css");
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 20px;}
</style>
