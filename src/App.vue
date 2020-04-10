<template>
  <div id="app">
    <nav id="nav">
      <h1>Ayuda a un artista</h1>
      <router-link
          to="/newArtist">
        <md-button @click="goTo('newArtist')" class="md-raised md-primary">Soy un artista</md-button>
      </router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style>
body, html{
  padding: 0px;
  margin: 0px;
}
:root{
  --aqua--green--color: #A4DCC8;
  --pink-color: #F299A9;
  --blue-color: #9FD2DC;
  --purple-color: #D6C8F4;
  --orange-color: #FFC2B2;
  --text-color: #000;
  --font-size-title: 64px;
  --font-size-text: 24px;
  --font-size-subtitles: 12px;
  --font-size-card-title: 20px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #fff;
}

nav {
  width: 100%;
  background: #0A0F0D;
  box-sizing: border-box;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
nav h1{
  margin: 0px;
  font-size: 1rem;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

</style>
<script>