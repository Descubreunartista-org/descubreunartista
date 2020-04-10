<template>
<div>
<div v-if="name" class="artist-card">
  <img src="../assets/placeholder.png" alt="">
  <div class="artist-info">
    <h1>{{name}}</h1>
    <p>Categoria artistica</p>
    <div class="social-icons">
      <a class="insta"  href="">
        <svg width="22" height="22" xmlns="http://www.w3.org/2000/svg"><g fill="#000" fill-rule="nonzero"><path d="M15.125 0h-8.25A6.876 6.876 0 000 6.875v8.25A6.876 6.876 0 006.875 22h8.25A6.876 6.876 0 0022 15.125v-8.25A6.876 6.876 0 0015.125 0zm4.813 15.125a4.818 4.818 0 01-4.813 4.813h-8.25a4.818 4.818 0 01-4.813-4.813v-8.25a4.818 4.818 0 014.813-4.813h8.25a4.818 4.818 0 014.813 4.813v8.25z"/><path d="M11 5.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zm0 8.938A3.442 3.442 0 017.562 11 3.441 3.441 0 0111 7.562 3.441 3.441 0 0114.438 11 3.442 3.442 0 0111 14.438z"/><circle cx="16.913" cy="5.088" r="1"/></g></svg>
      </a>
      <a class="twitter" href="">
        <svg width="23" height="19" xmlns="http://www.w3.org/2000/svg"><path d="M20.132 4.594c.009.197.013.394.013.593 0 6.066-4.617 13.061-13.061 13.061-2.593 0-5.005-.76-7.037-2.062.36.043.725.064 1.095.064 2.151 0 4.13-.734 5.702-1.965a4.596 4.596 0 01-4.289-3.189 4.569 4.569 0 002.074-.078 4.592 4.592 0 01-3.683-4.5v-.059c.619.344 1.326.55 2.08.574A4.586 4.586 0 01.982 3.212c0-.841.227-1.629.621-2.307A13.033 13.033 0 0011.067 5.7a4.591 4.591 0 017.823-4.186A9.207 9.207 0 0021.803.4a4.608 4.608 0 01-2.019 2.54 9.155 9.155 0 002.637-.723 9.33 9.33 0 01-2.29 2.377z" fill="#000" fill-rule="nonzero"/></svg>
      </a>
      <a class="youtube" href="">
        <svg width="26" height="20" xmlns="http://www.w3.org/2000/svg"><g fill="#000" fill-rule="nonzero"><path d="M17.002 8.683L11.258 5.54c-.33-.18-.72-.174-1.044.018a1.046 1.046 0 00-.518.908v6.232c0 .374.192.713.514.905a1.053 1.053 0 001.041.024l5.744-3.089a1.055 1.055 0 00.007-1.855z"/><path d="M25.809 4.648l-.001-.012c-.022-.21-.242-2.07-1.147-3.018C23.615.505 22.43.37 21.86.305a6.878 6.878 0 01-.129-.016l-.045-.005C18.248.034 13.057 0 13.005 0h-.01c-.052 0-5.243.035-8.71.284L4.237.29l-.121.015c-.564.065-1.737.2-2.786 1.354C.469 2.595.22 4.417.194 4.621l-.003.027C.183 4.735 0 6.808 0 8.889v1.946c0 2.081.183 4.154.191 4.241l.002.014c.022.205.24 2.033 1.141 2.98.984 1.076 2.227 1.219 2.896 1.295.106.012.197.023.26.034l.06.008c1.984.189 8.206.282 8.47.286h.016c.052 0 5.243-.035 8.68-.285l.046-.004.145-.017c.56-.06 1.728-.183 2.762-1.321.862-.937 1.111-2.759 1.137-2.963l.003-.027c.008-.087.191-2.16.191-4.241V8.889c0-2.08-.183-4.154-.191-4.241zm-1.333 6.187c0 1.926-.168 3.91-.184 4.092-.064.502-.327 1.654-.747 2.11-.648.713-1.313.784-1.798.835a8.337 8.337 0 00-.163.018c-3.324.24-8.32.278-8.55.279-.257-.004-6.389-.098-8.313-.276a6.688 6.688 0 00-.317-.041c-.57-.066-1.35-.155-1.949-.814l-.014-.015c-.413-.43-.668-1.508-.733-2.09a53.243 53.243 0 01-.184-4.098V8.889c0-1.924.167-3.905.184-4.091.077-.591.345-1.674.747-2.112.667-.734 1.371-.815 1.836-.869l.125-.014c3.373-.242 8.403-.278 8.584-.28.18.002 5.21.038 8.553.28l.134.015c.478.055 1.202.137 1.866.846l.006.006c.413.43.668 1.527.733 2.12.011.13.184 2.142.184 4.1v1.945z"/></g></svg>
      </a>
      <a class="patreon" href="">
        <svg width="21" height="20" xmlns="http://www.w3.org/2000/svg"><g fill="#161616" fill-rule="nonzero"><path d="M.178.47h3.516v19.167H.178zM12.998.47c-3.973 0-7.204 3.228-7.204 7.195 0 3.958 3.231 7.175 7.204 7.175 3.961 0 7.18-3.221 7.18-7.175 0-3.966-3.22-7.194-7.18-7.194z"/></g></svg>
      </a>
    </div>
    <div class="footer">
      <a href="">CONOCE MAS DEL ARTISTA >>></a>
    </div>
  </div>
</div>
<div v-else class="inscription artist-card">
  <div class="info">
    <h1 class="small-title">
      ¿Quieres unirte al resto de artistas?
    </h1>
    <p class="description">
      Rellena el formulario y empieza a formar parte de esta familia de artistas, date a conocer y comparte todo tu contenido.
    </p>
    <button class="light-button">INSCRIBIRME</button>
  </div>
</div>
</div>
</template>

<script>
export default {
  name: "CardArtist",
  props: {
    name: String,
    descritpion: String,
    image: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
  margin: 0;
}
  .artist-card{
    border-radius: 18px;
    width: 380px;
    height: 100%;
    max-height: 460px;
    max-width: 380px;
    box-shadow: 0px 10px 8px #EEEEEE;
    background: #fff;
  }
  .artist-card img{
    max-width: 380px;
  }
  .artist-card.inscription{
    background-image: url(../assets/inscription.png);
    display: flex;
    align-items: flex-end;
    box-sizing: border-box;
    padding: 1rem;
  }

  .artist-card.inscription .info{
    color: #eeee;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-bottom: 2rem;
  }
  .artist-card.inscription .info h1{
    font-size: var(--font-size-card-title);
  }
  .artist-card.inscription .info .description{
    font-size: var(--font-size-subtitles);
  }
  .artist-info{
    margin-top:1rem;
    color: var(--text-color);
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .artist-info h1{
      font-size: var(--font-size-card-title);
      margin-bottom: 0;
      padding-bottom: 0;
      box-sizing: border-box;
  }
  .artist-info p{
      font-size: var(--font-size-subtitles);
      margin-top: 0.5rem;
      margin-bottom: 1.5rem;
  }
  .social-icons{
    display: flex;
    justify-content: space-between;
    width: 80%;
    padding: 0 2rem;
    box-sizing: border-box;
  }
  .insta{
    cursor: pointer;
  }
  .insta:hover g{
    fill: #993ED9;
  }
  .twitter:hover path{
    fill: #00ACEE;
  }
  .youtube:hover g{
    fill: #FF0000;
  }
  .patreon:hover g{
    fill: #F4511E;
  }
  .footer{
    margin-top: 3rem;
    padding: 0 2rem;
    padding-top: 1rem;
    box-sizing: border-box;
    border-top: 1px solid #EEEEEE;
    font-size: var(--font-size-subtitles);    
  }
  .footer a{
    text-decoration: none;
    color: #161616;
    font-weight: 300;
  }
  .footer a:hover{
    color: var(--pink-color);
  }
</style>
