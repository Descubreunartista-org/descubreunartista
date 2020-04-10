<template>
  <div id="app">
    <nav id="nav">
      <div class="logo">
        <img src="./assets/logo.svg" alt="">
      </div>
      <div class="links">
        <router-link
          class="link"
          tag='a'
          to="/newArtist">
          LOGIN
        </router-link>
        <router-link
          class="link"
          tag='a'
          to="/newArtist">
          REGISTRO
        </router-link>
        <router-link
          class="link"
          tag='a'
          to="/newArtist">
          ARTISTAS
        </router-link>
      </div>
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
  --text-color: #161616;
  --link-text-hover: #AAAAAA;
  --font-size-big-title: 64px;
  --font-size-title: 64px;
  --font-size-text: 24px;
  --font-size-subtitles: 12px;
  --font-size-card-title: 20px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #fff;
}
.light-button{
  background: transparent;
  border: 1px solid #EEEE;
  text-align: center;
  font-size: 16px;
  font-weight: 300;
  color: #EEEE; 
  padding: 1rem;
  cursor: pointer;
}
.light-button:hover{
  background: var(--pink-color);
  border: 1px solid var(--pink-color);
}
input{
  background: transparent;
  height: 62px;
  width: 280px;
  outline: none;
  border: 1px solid #EEEE;
  font-size: var(--font-size-text);
  margin: 0.5rem 0;
  padding: 0 1rem;
  color: #EEE;
}
input::placeholder{
  font-size: var(--font-size-text);
  color: #ffff;
  font-weight: 300;
}
nav {
  width: 100%;
  background: transparent;
  box-sizing: border-box;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
nav img{
  height: 32px;
  width: 312px;
}
nav h1{
  margin: 0px;
  font-size: 1rem;
}
.links{
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  text-align: right;
}
.links a{
  text-decoration: none;
  color: #000;
  margin: 0.25rem 0;
}
.links a:hover{
  color: var(--pink-color);
}

</style>
<script>