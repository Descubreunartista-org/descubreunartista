<template>
  <div id="app">
    <nav id="nav">
      <div class="logo">
        <picture>
          <source>
          <img src="./assets/logo.png" alt="">
        </picture>
        
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
    <footer class="main-footer">
      <div class="container">
        <div class="content">
          <picture>
            <source>
            <img src="./assets/logo-inverse.png" alt="">
          </picture>
          <nav class="nav-footer">
            <ul class="list">
              <li><a class="link" href="">MORE</a></li>
              <li><a class="link" href="">MORE</a></li>
              <li><a class="link" href="">MORE</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  </div>
</template>

<style lang="scss">
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
body, html{
  padding: 0px;
  margin: 0px;
}

* {
  margin:0;
  padding: 0;
}

:root{
  --aqua--green--color: #A4DCC8;
  --pink-color: #f299a9;
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
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');
#app {
  font-family: 'Roboto', sans-serif;
  color: #fff;
}
.light-button{
  background: transparent;
  border: 1px solid #fff;
  text-align: center;
  font-size: 16px;
  font-weight: 300;
  color: #fff; 
  padding: 8px 36px;
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
  padding: 24px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
.icon {
  width: 32px;
  height: 32px;
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
  margin-bottom: 16px;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  font-size: 24px;
}
.links a:hover{
  color: var(--pink-color);
}

.container {
  max-width: 1280px;
  margin: 0 auto;
  box-sizing: content-box;
  padding: 0 24px;
}

.main-footer {
  background-color: #161616;
  padding: 162px 0;
  margin-top: 4px;
  .content {
    width: 100%;
    display: flex;
    justify-content: space-between;
    max-width: calc((100% - (100%/4)));
    margin: 0 auto;
  }
  .nav-footer {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .list {
      display: flex;
      .link {
        text-decoration: none;
        font-size: 24px;
        font-weight: 300;
        color: #ffffff;
        margin-left: 40px;
      }
    }
  }
}

</style>
<script>