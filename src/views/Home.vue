<template>
  <div class="home">
    <section class="hero container">
      <picture class="image">
        <source>
        <img src="./../assets/gallo.png" alt="">
      </picture>
      
      <div class="title">
        <h1><span class="line">descubre</span> <span class="line">un<span class="decorate">a</span></span> <span class="line">artista</span></h1>
        <p class="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla faucibus purus velit, a suscipit enim condimentum et. Donec ornare quis dui non porta. Duis venenatis maximus varius. Sed ac arcu mattis, gravida lorem eget, facilisis purus. Praesent sodales laoreet laoreet. Cras posuere ultricies turpis, sed congue ex. Suspendisse sapien quam posuere eget accumsan eget, fermentum sed eros. Pellentesque iaculis nisi a mollis venenatis. Suspendisse sapien quam, posuere eget accumsan eget, fermentum sed eros. Pellentesque iaculis nisi a mollis venenatis.
        </p>
      </div>

    </section>
    <section class="artists">
      <div class="form">
        <h1>BLA BLA BLA BLA</h1>
        <div class="filters">
          <input placeholder="Nombre" type="text"/>
          <input placeholder="categoria" type="text"/>
          <input placeholder="ordenar" type="text"/>
        </div>
      </div>
      <div class="cards-list">
        <div class="list">
          <card-artist
            class="card"
            v-for="artist in artistList"
            :key="artist.artisticName"
            :name="artist.artisticName"
            :image="artist.urlImage"
            :descritpion="artist.description"
          >
          </card-artist>
          <card-artist
            class="card">
          </card-artist>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import CardArtist from '@/components/CardArtist.vue';

export default {
  name: 'Home',
  components: {
    'card-artist': CardArtist,
  },
  data(){
    return{
      artistList:[ ]
    }
  },
  mounted(){
      const db = this.$firebase.firestore();
    db.collection("artist").get().then((querySnapshot) => {
    querySnapshot.forEach((doc, index) => {
                this.artistList.push(doc.data());
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
    });
});
  }

};
</script>
<style lang="scss" scoped>
  h1{
    margin:0;
    padding: 0;
  }
  .artists{
    position: relative;
    background: var(--pink-color);
    height: 540px;
    color: #161616;
    margin: 0 auto;
  }
  .artists .form h1{
    font-size: var(--font-size-title);
    font-weight: 500;
  }
  .artists .form {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 3rem;
    width: 100%;
    box-sizing: border-box;
  }
  .artists .form .filters{
    display: flex;
    justify-content: space-between;
    width: 80%;
    margin: 3rem 0;
    max-width: 1000px;
  }
  .cards-list{
    display: flex;
    padding: 2rem;
    position: absolute;
    width: 100%;
    justify-content: center;
    box-sizing: border-box;
  }
  .list{
    display: flex;
    width: 100%;
    flex-direction: row;
    box-sizing: border-box;
    max-width: 1200px;
  }
  .cards-list .card{
    margin: 0 1rem;
  }
  .hero{
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    color: #000;
    padding-top: 200px;
    padding-bottom: 260px;
    .image {
      position: absolute;
      z-index: -1;
      top: -180px;
      right: 80px;
    }
    .title {
      max-width: 60%;
      margin-bottom: 48px;
      .line {
        font-size: 132px;
        width: 100%;
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
        line-height: 0.82;
        display: flex;
        text-transform: uppercase;
        color: #000;
        .decorate {
          max-height: 94px;
          background-color: #000;
          color: #fff;
          width: 100%;
          line-height: 0.75;
          margin-top: 4px;
        }
      }
    }
  }
  .description{
    font-size: 24px;
    font-weight: 700;
    line-height: 1.33;
  }
</style>
