<template>
  <div class="register">
    <div class="progress">{{step}}</div>
    <div v-show="step === 1">
      <form action>
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
      </form>
      <button @click="next()">Siguiente</button>
    </div>
    <div v-show="step === 2">
      <form>
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
      </form>
      <button @click="next()">Siguiente</button>
    </div>
    <div v-show="step === 3">
        <form>
        <input type="text" />
        <button @click="send">Enviar</button>
        </form>
    </div>
  </div>
</template>
<script>
export default {
  name: "register",
  data: () => ({
    step: 1
  }),
  methods: {
    next() {
      if (this.step < 3) {
        this.step = this.step + 1;
      }
    },
    send(){

    },
    setArtist() {
      const db = this.$firebase.firestore();

      db.collection("artist")
        .doc(this.artisticName)
        .set({
          artisticName: this.artisticName,
          contact: this.email,
          shortDescription: this.shortDescription,
          urlImage: this.urlImage,
          youtubeUrl: this.youtubeUrl,
          fb: this.facebook
        })
        .then(function() {})
        .catch(function(error) {});
    }
  }
};
</script>
<style scoped>
.register{
    color: #161616;
}
</style>