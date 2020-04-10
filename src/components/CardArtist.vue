<template>
<div class="artist-card">
  <img src="../assets/placeholder.png" alt="">
  <div class="artist-info">
    <h1>Nombre del artista</h1>
    <p>Categoria artistica</p>
    <div class="social-icons">
      <a href="">
        <img src="../assets/insta.svg" alt="">
      </a>
      <a href="">
        <img src="../assets/twitter.svg" alt="">
      </a>
      <a href="">
        <img src="../assets/youtube.svg" alt="">
      </a>
      <a href="">
        <img src="../assets/patreon.svg" alt="">
      </a>
    </div>
    <div class="footer">
      <a href="">CONOCE MAS DEL ARTISTA >>></a>
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
  .artist-card{
    border-radius: 15px;
    height: 460px;
    box-shadow: 5px 10px 8px #EEEEEE;
  }
  .artist-info{
    margin-top:2rem;
    color: var(--text-color);
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .artist-info h1{
      font-size: var(--font-size-card-title);
      margin-bottom: 0;
      padding-bottom: 0;
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
  .footer{
    margin-top: 2rem;
    padding: 0 2rem;
    padding-top: 1rem;
    border-top: 1px solid #EEEEEE;
    font-size: var(--font-size-subtitles);    
  }
  .footer a{
    text-decoration: none;
    color: #000;
    font-weight: 300;
  }
</style>
