<template>
  <div class="home">
    <section class="banner">
      <div class="title">
        <h1>DESCUBRE</h1>
        <h1>UNA</h1>
        <h1>ARTISTA</h1>
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
          <select class="select-css">
            <option>CATEGORIA</option>
            <option>Apples</option>
            <option>Bananas</option>
            <option>Grapes</option>
            <option>Oranges</option>
          </select>
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
    });
});
  }

};
</script>
<style scoped>
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
    flex-wrap: wrap;
    width: 100%;
    flex-direction: row;
    box-sizing: border-box;
    max-width: 1200px;
  }
  .cards-list .card{
    margin: 1rem;
  }
  .banner{
    padding: 2rem;
    color: #000;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .banner .title{
    font-size: var(--font-size-big-title);
    max-width: 1200px;
    width: 100%;
  }
  .description{
    font-size: var(--font-size-text);
    max-width: 800px;
  }
</style>
