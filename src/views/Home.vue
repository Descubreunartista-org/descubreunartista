<template>
  <div class="home">
    <div class="cards-list">
      <card-artist
        v-for="artist in artistList"
        :key="artist.artisticName"
        :name="artist.artisticName"
        :image="artist.urlImage"
        :descritpion="artist.description"
      >
      </card-artist>
    </div>
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
<style scoped>
  .cards-list{
    display: flex;
    padding: 2rem;
  }
</style>
