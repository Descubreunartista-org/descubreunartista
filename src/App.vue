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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #fff;
}
h1, p{
  margin: 0px;
  padding: 0px;
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
.md-primary {
    background: blue !important;
    color: #fff;
  }
</style>
<script>