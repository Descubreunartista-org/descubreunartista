<template>
  <div class="home">
    <section class="hero container">
      <picture class="image">
        <source>
        <img src="./../assets/gallo.png" alt="">
      </picture>
      
      <div>
        <h1 class="title"><span class="line">descubre</span> <span class="line">un<span class="decorate">a</span></span> <span class="line">artista</span></h1>
        <p class="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla faucibus purus velit, a suscipit enim condimentum et. Donec ornare quis dui non porta. Duis venenatis maximus varius. Sed ac arcu mattis, gravida lorem eget, facilisis purus. Praesent sodales laoreet laoreet. Cras posuere ultricies turpis, sed congue ex. Suspendisse sapien quam posuere eget accumsan eget, fermentum sed eros. Pellentesque iaculis nisi a mollis venenatis. Suspendisse sapien quam, posuere eget accumsan eget, fermentum sed eros. Pellentesque iaculis nisi a mollis venenatis.
        </p>
      </div>

    </section>
    <section class="artists">
      <div class="artist-filters">
      <h2 class="title">BLA BLA BLA BLA</h2>
        <form class="form container">
          <div class="filters">
            <input placeholder="Nombre" type="text"/>
            <input placeholder="categoria" type="text"/>
            <input placeholder="ordenar" type="text"/>
          </div>
        </form>
      </div>
      
      <div class="cards-list container">
        <ul class="list">
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
        </ul>
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
  .hero{
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    color: #000;
    padding-top: 165px;
    padding-bottom: 260px;
    .image {
      position: absolute;
      z-index: -1;
      top: -180px;
      right: 140px;
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
    .description{
      font-size: 24px;
      font-weight: 700;
      line-height: 1.33;
      max-width: 60%;
    }
  }
  .artists{
    
    color: #161616;
    
    .title {
      font-size: 64px;
      font-weight: 500;
      line-height: 1;
      text-align: center;
    }
    .artist-filters {
      background: var(--pink-color);
      padding-top: 64px;
      padding-bottom: 168px;
    }
    .form {
      display: flex;
      flex-direction: row;
      justify-content: center;
      padding-top: 82px;
      padding-bottom: 90px;

      .filters{
        display: flex;
        justify-content: space-between;
        width: 80%;
      }
    }
    .cards-list {
      position: relative;
      top: -168px;
      .list {
        display: flex;
        justify-content: space-between;
        .card {
          width: calc((100%/3) - 20px);
          flex: 0 0 calc((100%/3) - 20px);
        }
      }
    }
  }

  
  
</style>
